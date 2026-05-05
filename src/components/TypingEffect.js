'use client';

import { TypeAnimation } from 'react-type-animation';

const TypingEffect = () => {
  const phrases = [
    "an Editor",
    1000,
    "a Developer",
    1000,
    "an Engineer",
    1000,
    "a Musician",
    1000
  ];

  return (
    <div className="text-2xl font-semibold typing-effect">
      <span>I&apos;m</span>
      <TypeAnimation
        sequence={phrases}
        wrapper="span"
        speed={50}
        repeat={Infinity}
        cursor={true}
        preRenderFirstString={true}
        className="subject ml-2" 
      />
    </div>
  );
};

export default TypingEffect;