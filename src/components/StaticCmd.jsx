import React from 'react';
import { IoLogoApple } from 'react-icons/io5';
import { FaRegFolderOpen } from 'react-icons/fa';
import CommandText from './CommandText';
import { FaFolderOpen } from 'react-icons/fa';

export default function StaticCmd({ cmd }) {
  return (
    <div className="flex gap-2 command_color items-center opacity-85">
      <IoLogoApple className="text-white" />/
      <FaFolderOpen className="command_color" />
      <span>~/varun/portfolio</span>
      {cmd && <CommandText cmd={cmd} />}
    </div>
  );
}
