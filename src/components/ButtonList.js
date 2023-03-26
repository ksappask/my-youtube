import React from "react";
import Button from "./Button";

const itemList = ["All", "Gaming", "Songs", "Trending", "Sports"];

const ButtonList = () => {
  return (
    <div className="flex">
      {itemList.map((e) => {
        return <Button name={e} />;
      })}
    </div>
  );
};

export default ButtonList;
