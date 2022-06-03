import React from 'react';
import banner from '../images/zustand-banner.jpg';

export const What: React.FC = () => (
  <div>
    <h2>Wat is Zustand?</h2>
    <ul>
      <li>Global state management library voor React</li>
      <li>Gebaseerd op hooks</li>
      <li>Extreem weinig boilerplate</li>
      <li>Simpel te gebruiken en begrijpen</li>
      <li>Niet opinionated</li>
    </ul>
    <img src={banner} alt="" />
  </div>
);
