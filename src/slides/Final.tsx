import React from 'react';
import { ExternalLink } from '../components/ExternalLink';

export const Final: React.FC = () => (
  <div>
    <h2>Resources</h2>
    <ul>
      <li><ExternalLink to="https://github.com/pmndrs/zustand">github.com/pmndrs/zustand</ExternalLink></li>
      <li><ExternalLink to="https://zustand-demo.pmnd.rs/">Fancy demo page</ExternalLink></li>
    </ul>
  </div>
);
