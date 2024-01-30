import React, { useState, useEffect } from "react";

export default function Timer() {
    const [count, setCount] = useState(0);
      
    useEffect(() => {
        setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000);
    });
      

    return (
    <div>
        <p>{count}</p>
    </div>
    );
}

