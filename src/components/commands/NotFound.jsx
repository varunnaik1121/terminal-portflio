import React from 'react';

export default function NotFound({ command }) {
  return (
    <div className="text-red-500">
      <h4>{command} is Not recognized as command</h4>
      <h4 className="text-white">Try : ls</h4>
    </div>
  );
}
