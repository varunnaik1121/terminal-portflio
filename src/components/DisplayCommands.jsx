import React from 'react';
import StaticCmd from './StaticCmd';
export default function DisplayCommands({ cmds }) {
  return (
    <>
      {cmds?.map((item, index) => {
        return (
          <div key={index} className="transition-opacity">
            <div className="flex justify-between">
              {item.command && <StaticCmd cmd={item.command} />}
              {item.command && <div className="text-sm">{item.time}</div>}
            </div>
            {item.command && (
              <div className="w-full">
                <h3 className="text-4xl text-slate-300 text-center font-fascinate capitalize underline opacity-85">
                  {item.command}
                </h3>
              </div>
            )}
            {item.Component && <item.Component command={item.command} />}
          </div>
        );
      })}
    </>
  );
}
