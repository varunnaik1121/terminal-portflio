import React from 'react';

export default function ProjectCard({ url, image, name }) {
  return (
    <div className=" h-auto bg-gray-800 shadow-md rounded-md flex py-6 justify-center items-center  flex-col m-2">
      <div className="w-[100px] h-[100px] my-2">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <a
        className="text-lg text-center underline text-slate-300 opacity-85 capitalize"
        href={url}
        target="_blank"
        rel="noreferrer"
      >
        {name}
      </a>
    </div>
  );
}
