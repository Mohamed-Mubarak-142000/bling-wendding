import React from "react";

function Skilliton() {
  return (
    <div
      style={{
        display: "flex",
        gap: "15px",
        padding: "20px",
        overflowX: "hidden",
        width: "fit-content",
      }}
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <div
          key={index}
          style={{
            width: "330px",
            height: "180px",
            background: "#e0e0e0",
            borderRadius: "10px",
          }}
          className="skeliton"
        ></div>
      ))}
    </div>
  );
}

export default Skilliton;
