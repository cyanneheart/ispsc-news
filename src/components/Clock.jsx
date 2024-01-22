import { useState, useEffect } from 'react';

function Clock() {
  const [formattedTime, setFormattedTime] = useState('');

  const updateClock = () => {
    const currentDate = new Date();
    const months = [
      "January", "February", "March", "April",
      "May", "June", "July", "August",
      "September", "October", "November", "December"
    ];
    const daysOfWeek = [
      "Sunday", "Monday", "Tuesday", "Wednesday",
      "Thursday", "Friday", "Saturday"
    ];

    const dayOfWeek = daysOfWeek[currentDate.getDay()];
    const month = months[currentDate.getMonth()];
    const day = currentDate.getDate();
    const year = currentDate.getFullYear();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";

    const newFormattedTime = `${dayOfWeek}, ${month} ${day}, ${year}, ${hours}:${minutes}:${seconds} ${ampm}`;

    setFormattedTime(newFormattedTime);
  };

  useEffect(() => {
    updateClock();

    const intervalId = setInterval(() => {
      updateClock();
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      {formattedTime}
    </div>
  );
}

export default Clock;
