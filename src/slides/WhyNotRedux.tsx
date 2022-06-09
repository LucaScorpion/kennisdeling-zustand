import React from 'react';

export const WhyNotRedux: React.FC = () => (
  <div>
    <h2>Waarom niet Redux?</h2>
    <ul>
      <li>Redux heeft veel boilerplate</li>
      <li>Async operaties (thunks) zijn <em>nog</em> meer boilerplate</li>
      <li>Zustand is (imo) makkelijker te begrijpen voor minder ervaren frontenders</li>
    </ul>
    <p>
      Note: je <em>kan</em> Zustand wel zo inrichten dat je het zoals Redux kan gebruiken (i.e. reducers, types, etc).
    </p>
  </div>
);
