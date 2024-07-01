import React from 'react';
import { Link } from 'react-dom';

export default function SocialLink({ Icon, url, name }) {
  console.log({ Icon });
  return (
    <div className=" text-green-500  py-2 flex items-center px-2 gap-1">
      {Icon}
      {name}
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="text-blue-700 underline"
      >
        @{name}
      </a>
    </div>
  );
}
