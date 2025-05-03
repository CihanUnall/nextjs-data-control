"use client";

import { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000); // Her 1 saniyede bir count +1

    return () => {
      clearInterval(interval); // Sayfa kapanınca interval durdur
    };
  }, []); // [] -> sadece ilk açıldığında çalışsın

  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  );
}
