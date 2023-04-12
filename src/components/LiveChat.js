import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomComment, generateRandomName } from "./helper";

const LiveChat = () => {
  const dispatch = useDispatch();

  const [liveMessage, setLiveMessage] = useState("");

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      // API Polling
      console.log("API Polling");

      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomComment(),
        })
      );
    }, 1500);

    // To remove Interval
    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="ml-2 p-2 h-[600px] shadow-lg rounded-lg bg-slate-100 border border-black overflow-y-scroll flex flex-col-reverse">
        <div>
          {" "}
          {chatMessages.map((c, index) => (
            <ChatMessage key={index} name={c.name} message={c.message} />
          ))}
        </div>
      </div>
      <form
        className="w-full ml-2 p-2 border border-black rounded-sm"
        onSubmit={(e) => {
          e.preventDefault();

          dispatch(
            addMessage({
              name: "Akash Krishnan",
              message: liveMessage,
            })
          );
        }}
      >
        <input
          className="w-96 px-2 "
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className=" px-2 bg-green-100">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
