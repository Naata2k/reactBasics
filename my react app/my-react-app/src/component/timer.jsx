import React, { useState, useEffect } from "react";

export default function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
    
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <p>{count}</p>
    </div>
  );
}
