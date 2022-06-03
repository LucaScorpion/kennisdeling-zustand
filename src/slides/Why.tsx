import React from 'react';

export const Why: React.FC = () => (
  <div>
    <h2>Waarom niet Redux?</h2>
    <ul>
      <li>Redux heeft veel boilerplate</li>
      <li>Makkelijker te begrijpen voor minder ervaren frontenders</li>
    </ul>
    <p>
      Note: je <em>kan</em> Zustand wel zo inrichten dat je het zoals Redux zou gebruiken (i.e. reducers, types, etc).
    </p>
  </div>
);
