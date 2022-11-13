import React from 'react';
import Typed from "typed.js";
import { useEffect, useRef } from "react";

export default function Typingeff() {
  // Create Ref element.
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Full Stack Developer", "Speech and Audio Researcher", "Deep Learning Enthusiast", "Love Football, Hala Madrid"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 1000,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      cursorChar: "!"
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <span ref={el}></span>
    </div>
  );
}