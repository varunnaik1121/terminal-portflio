import React from 'react';

export default function Help({ command }) {
  const keyWords = {
    bio: 'displays my bio info',
    skills: 'displays my skills',
    contact: 'displays my contact info',
    about: 'shows info about this webpage',
    projects: 'Display my projects',
    cls: 'clears the screen history',
  };

  console.log({ command });

  return (
    <div>
      <h5 className="px-1 py-2 text-white ">{command}</h5>
      <div className="flex gap-4 px-4">
        <div className="text-yellow-500 opacity-85">
          {Object.keys(keyWords).map((eachKey) => {
            return <div key={eachKey}>{eachKey}</div>;
          })}
        </div>
        <div className="text-slate-200 opacity-85">
          {Object.values(keyWords).map((value) => {
            return <div key={value}>{value}</div>;
          })}
        </div>
      </div>
    </div>
  );
}
