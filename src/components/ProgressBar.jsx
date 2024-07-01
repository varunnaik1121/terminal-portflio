import React, { useEffect, useState } from 'react';

export default function ProgressBar({ Icon, language, percent }) {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setAnimate(true);
  }, []);
  return (
    <div>
      <div className="flex gap-2 items-center text-white">
        <Icon />
        <h3>{language}</h3>
      </div>
      <div className="relative w-[600px] h-[8px] bg-gray-800 z-1 my-2">
        <div
          className={` h-full top-0 left-0 bg-yellow-500 absolute z-10 rounded-md   transition-all opacity-85`}
          style={{
            width: animate ? Number(percent * 6).toString() + 'px' : '0px',
            transition: 'width 1s ease',
          }}
        ></div>
      </div>
    </div>
  );
}
