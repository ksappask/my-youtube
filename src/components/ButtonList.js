import React from "react";
import Button from "./Button";

const itemList = ["All", "Gaming", "Songs", "Trending", "Sports"];

const ButtonList = () => {
  return (
    <div className="flex">
      {itemList.map((e, index) => {
        return <Button key={index} name={e} />;
      })}
    </div>
  );
};

export default ButtonList;
