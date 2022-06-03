import React from 'react';
import { CodeBlock, InlineCode } from '../components/Code';

export const MyFirstStore: React.FC = () => (
  <div>
    <h2>My first store</h2>
    <h3>Store definitie</h3>
    <ul>
      <li>Store interface (technisch gezien optioneel, vaak wel nodig)</li>
      <li>Een <InlineCode code="create" /> call met initial state om de store hook te maken</li>
    </ul>
    <CodeBlock language="typescript" code={`
import create from 'zustand';

export interface OrderStore {
  id: string;
}

export const useOrderStore = create<OrderStore>(() => ({
  id: 'some-id',
}));
`}
    />
    <h3>Component</h3>
    <CodeBlock language="tsx" code={`
import React from 'react';
import { useOrderStore } from '../stores/order';

export const Example: React.FC = () => {
  // Gebruik de volledige store:
  const order = useOrderStore();
  // Of een slice:
  const id = useOrderStore((s) => s.id);

  return (
    <div>Order id: {order.id}</div>
  );
};
`}
    />
  </div>
);
