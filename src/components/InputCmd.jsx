import React, { useEffect, useState } from 'react';
import StaticCmd from './StaticCmd';

export default function InputCmd({ handleSubmit: onClick }) {
  const [showFakeCaret, setShowFakeCaret] = useState(false);
  const [command, setCommand] = useState('');

  useEffect(() => {
    setShowFakeCaret(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!command) return;
    onClick(command);
    setCommand('');
  };
  return (
    <form className="w-full relative py-2" onSubmit={handleSubmit}>
      {showFakeCaret && (
        <div className="w-2 h-4 bg-white absolute left-0 top-[50%] -translate-y-2/4 animate-pulse caret-slate-100"></div>
      )}
      <input
        placeholder="try ls,bio,contact,skills,projects .."
        className="border-none text-white outline-none w-full bg-inherit placeholder:tracking-widest placeholder:px-2 text-lg font-semibold"
        value={command}
        onChange={(e) => {
          setShowFakeCaret(false);
          setCommand(e.target.value);
        }}
      ></input>
    </form>
  );
}
