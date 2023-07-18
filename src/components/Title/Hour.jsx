import { useState, useEffect } from "react";

const Hour = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const options = {
        timeZone: "America/Argentina/Buenos_Aires",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      };
      const formattedTime = date.toLocaleTimeString([], options);
      setTime(formattedTime);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <p className="text-time">{time} ART</p>
    </>
  );
};

export default Hour;
