import React from 'react';
import { CodeBlock, InlineCode } from '../Code';

export const MyFirstStore: React.FC = () => (
  <div>
    <h2>My first store</h2>
    <CodeBlock language="typescript" code={`
import create from 'zustand';

export interface OrderStore {
  id: string;
}

export const useOrderStore = create<OrderStore>((set) => ({
  id: 'some-id',
}));
`}
    />
    <ul>
      <li>Store interface (technisch gezien optioneel, vaak wel nodig)</li>
      <li>Een <InlineCode code="create" /> call om de store hook te maken</li>
    </ul>
  </div>
);
