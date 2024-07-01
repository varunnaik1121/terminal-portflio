import { Component } from 'react';
import Help from '../components/Help';
import Contact from '../components/commands/Contact';
import Skills from '../components/commands/Skills';
import Projects from '../components/commands/Projects';
import NotFound from '../components/commands/NotFound';
import Bio from '../components/commands/Bio';
import About from '../components/About';
export const renderCommand = (cmd) => {
  switch (cmd) {
    case 'ls':
      return {
        command: 'ls',
        Component: Help,
        time: '',
      };
    case 'bio':
      return {
        command: 'bio',
        Component: Bio,
        time: '',
      };
    case 'contact':
      return {
        command: 'contact',
        Component: Contact,
        time: '',
      };
    case 'about':
      return {
        command: 'about',
        Component: About,
        time: '',
      };
    case 'skills':
      return {
        command: 'skills',
        Component: Skills,
        time: '',
      };
    case 'projects':
      return {
        command: 'projects',
        Component: Projects,
        time: '',
      };
    case 'cls':
      return { command: '', Component: null, time: '' };
    case 'clear':
      return { command: '', Component: null, time: '' };
    default:
      return {
        command: cmd,
        Component: NotFound,
        time: '',
      };
  }
};
