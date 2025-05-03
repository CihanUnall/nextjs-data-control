"use client";

import { useState, useEffect } from "react";

export default function ButtonCounter() {
  const [count, setCount] = useState(0);
  const [cihan, setCihan] = useState("");

  const handleClickplus = () => {
    setCount(count + 1); // Butona basınca count +1
  };
  const handleClickminus = () => {
    setCount(count - 1); // Butona basınca count -1
  };

  useEffect(() => {
    if (count > 0) {
      setCihan("plus");
    } else if (count < 0) {
      setCihan("minus");
    } else {
      setCihan("");
    }
  }, [count]); // count değişince çalışacak

  return (
    <div style={{ padding: "20px" }}>
      <h1>Total : {count}</h1>

      <button
        onClick={handleClickplus}
        style={{
          padding: "10px 20px",
          marginTop: "10px",
          backgroundColor: "green",
          color: "white",
        }}
      >
        +
      </button>

      <button
        onClick={handleClickminus}
        style={{
          padding: "10px 20px",
          marginTop: "10px",
          backgroundColor: "green",
          color: "white",
          marginLeft: "10px",
        }}
      >
        -
      </button>
      <h1> {cihan}</h1>
    </div>
  );
}
