import React, { useState, useEffect } from "react";

const TitleComponent = () => {
  const titles = ["I am Andrés   ", "I am Developer", "Andreveloper!  "];
  const [index, setIndex] = useState(0);
  const [animationActive, setAnimationActive] = useState(true);

  useEffect(() => {

    if (index < titles.length - 1) {
      // Si no es el último título, mantener la animación
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % titles.length);
      }, 6000);

      return () => clearInterval(interval);
    } else {
      // Si es el último título, detener la animación
      setAnimationActive(false);
    }
  }, [index, titles.length]);

  return (
    <h1
      className="w-max flex text-4xl sm:text-5xl tracking-tight font-bold"
      aria-label={`Current title: ${titles[index]}`}
    >
      <span className="mr-3">Hey,</span>
      <span
        className={`pr-5 bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent font-bold ${
          animationActive ? 'animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white' : ''
        }`}
      >
        {titles[index]}
      </span>
    </h1>
  );
};

export default TitleComponent;
