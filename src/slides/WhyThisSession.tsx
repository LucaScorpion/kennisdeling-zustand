import React from 'react';
import safeDeal from '../images/safe-deal.png';

export const WhyThisSession: React.FC = () => (
  <div>
    <h2>Waarom deze kennisdeling?</h2>
    <ul>
      <li>Nieuwe checkout frontend bij BAS World (Safe Deal)</li>
      <li>Heb Redux vaker gebruikt, maar voelde nooit helemaal soepel</li>
      <li>Als experiment :)</li>
    </ul>
    <img src={safeDeal} />
  </div>
);
