import React from 'react';

export default function Navbar() {
  const dots = [
    {
      color: 'bg-red-500',
      id: 1,
    },
    {
      color: 'bg-yellow-500',
      id: 2,
    },
    {
      color: 'bg-green-500',
      id: 3,
    },
  ];

  return (
    <nav className="w-full rounded-md  text-gray-400 py-2 flex justify-start items-center bg-slate-900">
      <div className=" flex px-4 py-2 ">
        {dots.map((dot) => (
          <div
            className={`rounded-full w-3 h-3 mx-2  ${dot.color}`}
            key={dot.id}
          ></div>
        ))}
      </div>
      <div className="justify-center items-center w-full md:px-8 px-4">
        <h4 className="font-semibold">📄varun/portflio.jsx</h4>
      </div>
    </nav>
  );
}
