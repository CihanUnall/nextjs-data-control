"use client";
import React, { useState } from "react";

function InputExample() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <h2>example</h2>

      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="add data "
        style={{
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          width: "30rem",
          marginBottom: "10px",
        }}
      />
      <hr />
      <h2>text</h2>

      <p>{text}</p>
    </div>
  );
}

export default InputExample;
