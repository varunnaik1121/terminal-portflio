import React from 'react';
import image from '../assets/mac-wallpaper.jpg';
export default function Background() {
  return (
    <img
      className="absolute top-0 w-full h-screen -z-10"
      src={image}
      alt="image"
    ></img>
  );
}
