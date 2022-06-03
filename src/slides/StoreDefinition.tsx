import React from 'react';
import { CodeBlock, InlineCode } from '../components/Code';

export const StoreDefinition: React.FC = () => (
  <div>
    <h2>Store definitie</h2>
    <ul>
      <li>Store interface (technisch gezien optioneel, vaak wel nodig)</li>
      <li>Een <InlineCode code="create" /> call met initial state om de store hook te maken</li>
    </ul>
    <CodeBlock language="typescript" code={`
import create from 'zustand';

export interface OrderStore {
  id: string;
  setId: (id: string) => void;
}

export const useOrderStore = create<OrderStore>((set) => ({
  id: 'some-id',
  setId: (id) => set({ id }),
}));
`}
    />
  </div>
);
