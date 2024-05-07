"use client";
import { useEffect, useState } from "react";

export default function TimeNow() {
  const date = new Date();
  const [hours, setHours] = useState(date.getHours());
  const [minutes, setMinutes] = useState(date.getMinutes());
  const [seconds, setSeconds] = useState(date.getSeconds());

  useEffect(() => {
    setInterval(() => {
      const currentDate = new Date();
      setHours(currentDate.getHours());
      setMinutes(currentDate.getMinutes());
      setSeconds(currentDate.getSeconds());
    }, 1000);
  }, []);

  return (
    <div className="flex">
      <div>{hours.toLocaleString("en-SG", { minimumIntegerDigits: 2 })}:</div>
      <div>{minutes.toLocaleString("en-SG", { minimumIntegerDigits: 2 })}:</div>
      <div>{seconds.toLocaleString("en-SG", { minimumIntegerDigits: 2 })}</div>
    </div>
  );
}
