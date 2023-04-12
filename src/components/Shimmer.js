import React from "react";

const Shimmer = () => {
  return (
    <div className="flex flex-wrap">
      {Array(21)
        .fill("")
        .map((e, index) => (
          <div
            key={index}
            className="w-56 h-56 p-2 m-2 shadow-lg bg-gray-200"
          />
        ))}
    </div>
  );
};

export default Shimmer;
