/* eslint-disable react/prop-types */

import React, { useState, useEffect } from "react";

// Helper function for formatting large numbers
const formatNumber = (num) => {
  if (num >= 1000000) return (num / 1000000).toFixed(2) + "M"; 
  if (num >= 1000) return (num / 1000).toFixed(2) + "K"; 
  return num.toLocaleString();
};

const Counter = ({ end, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const incrementTime = (duration / end) * 1000;

    const counter = setInterval(() => {
      if (end >= 100000) {
        start += 1000;
      } else {
        start += 100;
      }
      setCount(start);

      if (start === end) {
        clearInterval(counter);
      }
    }, incrementTime);

    return () => clearInterval(counter);
  }, [end, duration]);

  return <span>{formatNumber(count)}</span>;
};

export default Counter;
