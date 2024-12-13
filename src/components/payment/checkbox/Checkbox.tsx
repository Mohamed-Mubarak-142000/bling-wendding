import React from "react";

function Checkbox() {
  return (
    <div
      className="flex gap-2 rounded-md bg-gray-300   px-2 items-center"
      style={{
        height: "44px",
        border: "1px solid #6c5656",
        backgroundColor: "#F4F4F4",
      }}
    >
      <div
        className="w-4 h-4 rounded-full bg-white"
        style={{ border: "4px solid #6c5656" }}
      ></div>
      <label
        htmlFor="country-option-1"
        className="block  text-sm font-medium text-gray-500 dark:text-gray-300"
      >
        Cash on Delivery
      </label>
    </div>
  );
}

export default Checkbox;
