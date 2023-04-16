import { useMemo, useState } from "react";
import { findPrime } from "./helper";

const Demo = () => {
  const [text, setText] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const prime = useMemo(() => findPrime(text), [text]);

  return (
    <div
      className={
        "m-4 p-2 w-96 h-96 border border-black" +
        (isDarkTheme && " text-white bg-black")
      }
    >
      <div>
        <button
          className="m-10 p-2 bg-green-200"
          onClick={() => setIsDarkTheme(!isDarkTheme)}
        >
          Toggle
        </button>
      </div>
      <div>
        <input
          className="px-2 border border-black w-72 text-black"
          type="number"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></input>
        <div>
          <h1>nth Prime Number : {prime}</h1>
        </div>
      </div>
    </div>
  );
};

export default Demo;
