import { DiJavascript } from 'react-icons/di';
import { RiReactjsLine } from 'react-icons/ri';
import { SiExpress } from 'react-icons/si';
import { SiTailwindcss } from 'react-icons/si';
import ProgressBar from '../ProgressBar';
export default function Skills() {
  const skills = [
    {
      language: 'Javascript',
      Icon: DiJavascript,
      percent: 85,
    },
    {
      language: 'React JS',
      Icon: RiReactjsLine,
      percent: 80,
    },
    {
      language: 'Express JS',
      Icon: SiExpress,
      percent: 65,
    },
    {
      language: 'Tailwind CSS',
      Icon: SiTailwindcss,
      percent: 75,
    },
  ];
  return (
    <div className="w-full flex px-4 flex-col py-2">
      {skills.map((skill, index) => {
        return (
          <ProgressBar
            key={index}
            language={skill.language}
            Icon={skill.Icon}
            percent={skill.percent}
          />
        );
      })}
    </div>
  );
}
