import { useEffect, useRef, useState } from 'react';
import Navbar from './Navbar';
import CurrentDate from './CurrentDate';
import StaticCmd from './StaticCmd';
import InputCmd from './InputCmd';
import Welcome from './Welcome';
import Help from './Help';
import DisplayCommands from './DisplayCommands';
import { renderCommand } from '../utils/renderCommand';
export default function Terminal() {
  const divRef = useRef(null);
  const [cmds, setCmds] = useState([
    {
      command: '',
      Component: Welcome,
      time: new Date().toLocaleTimeString(),
    },
    {
      command: 'ls',
      Component: Help,
      time: new Date().toLocaleTimeString(),
    },
  ]);
  //whenever the cmds are added to the state then the view will automatically be mooved towards the below.
  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: 'auto' });
  }, [cmds]);

  const handleSubmit = (cmd) => {
    //after use submitted the command or input form
    if (!cmd) return;
    if (cmd === 'cls' || cmd === 'clear') {
      setCmds([]);
    }
    setCmds((prev) => [
      ...prev,
      { ...renderCommand(cmd), time: new Date().toLocaleTimeString() },
    ]);
  };
  return (
    <div className="text-green-500 border-1 text-xl tracking-wider leading-8 border-black rounded-md  opacity-85 bg-black h-[60vh] w-[60%] flex flex-col">
      <Navbar />
      <div className="flex-1 overflow-y-auto p-4 scroll no-scrollbar">
        <CurrentDate />
        <DisplayCommands cmds={cmds} />
        <StaticCmd />
        <InputCmd handleSubmit={handleSubmit} />
        <div ref={divRef}></div>
      </div>
    </div>
  );
}
