import React from 'react';
import react from './images/react-logo.png';
import zustand from './images/zustand-logo.webp';
import { What } from './slides/What';
import { WhyNot } from './slides/WhyNot';
import { Setup } from './slides/Setup';
import { StoreDefinition } from './slides/StoreDefinition';
import { WhyNotRedux } from './slides/WhyNotRedux';
import { Example } from './slides/Example';
import { useHash } from './hooks/useHash';
import { Final } from './slides/Final';
import { StoreUsage } from './slides/StoreUsage';

const slideComponents = [
  What,
  WhyNot,
  WhyNotRedux,
  Setup,
  StoreDefinition,
  StoreUsage,
  Example,
  Final,
];

export const App: React.FC = () => {
  const [hash, setHash] = useHash();
  const slide = parseInt(hash) || 0;

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
          onClick={() => setHash(Math.max(slide - 1, 0))}
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
          onClick={() => setHash(Math.min(slide + 1, slideComponents.length - 1))}
        >
          ❯
        </div>
      </main>
    </div>
  );
};
