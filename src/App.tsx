import React, { useState } from 'react';
import react from './images/react-logo.png';
import zustand from './images/zustand-logo.webp';
import { What } from './slides/What';
import { Why } from './slides/Why';
import { Setup } from './slides/Setup';
import { MyFirstStore } from './slides/MyFirstStore';

const slideComponents = [
  What,
  Why,
  Setup,
  MyFirstStore,
];

export const App: React.FC = () => {
  const [slide, setSlide] = useState(0);

  return (
    <div className="app">
      <header className="header">
        <img src={react} className="react-logo" alt="" />
        <h1>Zustand kennisdeling</h1>
        <img src={zustand} alt="" />
      </header>
      <main>
        <div
          className="switcher prev"
          onClick={() => setSlide((p) => Math.max(p - 1, 0))}
        >
          ❮
        </div>
        <div className="content">
          {slideComponents.map((S, i) => {
            const slideClass = i === slide
              ? 'current'
              : i < slide
                ? 'prev'
                : 'next';
            return (
              <div key={i} className={`slide ${slideClass}`}>
                <S />
              </div>
            );
          })}
        </div>
        <div
          className="switcher next"
          onClick={() => setSlide((p) => Math.min(p + 1, slideComponents.length - 1))}
        >
          ❯
        </div>
      </main>
    </div>
  );
};
