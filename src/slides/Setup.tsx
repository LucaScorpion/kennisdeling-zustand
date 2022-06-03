import React from 'react';
import { InlineCode } from '../Code';

export const Setup: React.FC = () => (
  <div>
    <h2>Setup</h2>
    <InlineCode language="bash" code="npm install zustand" />
    <p>
      Geen components/context/extra laagjes/etc nodig.
    </p>
  </div>
);
