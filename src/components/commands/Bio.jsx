import React from 'react';
import { RiVerifiedBadgeFill } from 'react-icons/ri';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import SocialLink from '../SocialLink';
export default function Bio() {
  const links = [
    {
      name: 'Gitub',
      url: 'https://github.com/varunnaik1121',
      Icon: <FaGithub />,
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/varun-p-816495211/',
      Icon: <FaLinkedin />,
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/varunnaik62/',
      Icon: <RiInstagramFill />,
    },
  ];
  return (
    <div className="text-white text-xl py-2 px-4">
      <div className="flex items-center gap-x-6">
        <img
          src={
            'https://avatars.githubusercontent.com/u/92010950?s=400&u=d2ca3371be026613114e80941ada60493c9f0be3&v=4'
          }
          className="w-40 h-40 rounded-full border-2 border-solid border-green-500"
        />
        <div>
          <div className="flex gap-1 items-start bg-no-repeat flex-col ">
            <div className="flex gap-2 items-center">
              <h3>Varun P</h3>
              <RiVerifiedBadgeFill className="text-blue-700 " />
            </div>
            <div className="py-2 text-base text-slate-400">
              <p>
                22 years on this planet, 22 orbits around the sun, and countless
                lines of code written, with many more to come.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-4 text-lg opacity-85">
        <p>
          Hi there! As a software developer deeply passionate about web
          development, I'm constantly exploring new coding horizons. Sharing my
          journey and discoveries online fuels my drive for learning and growth.
        </p>
      </div>
      <div className="grid grid-cols-2">
        {links.map((link, index) => {
          return (
            <SocialLink
              Icon={link.Icon}
              name={link.name}
              url={link.url}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}
