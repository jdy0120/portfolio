"use client";

import React, { useEffect, useState } from "react";

const page = () => {
  const [time, setTime] = useState(0);
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setTime((prev) => prev + 1);
    }, 1000);
    return () => clearTimeout(timeOut);
  }, [time]);
  return (
    <div>
      {time}
      <button onClick={() => setTime(0)}>reset</button>
    </div>
  );
};

export default page;
