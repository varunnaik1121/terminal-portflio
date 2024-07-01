import React, { useEffect, useState } from 'react';

export default function CurrentDate() {
  const [date, setDate] = useState('');
  useEffect(() => {
    const dt = new Date();
    setDate(dt.toDateString());
  }, []);
  return (
    <div className="w-full py-4">
      <h2 className={`text-xl command_color`}>Today is, {date}</h2>
    </div>
  );
}
