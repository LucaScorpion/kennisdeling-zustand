import React from 'react';
import { CodeBlock } from '../components/Code';

export const StoreUsage: React.FC = () => (
  <div>
    <h2>Store usage</h2>
    <CodeBlock language="tsx" code={`
import React, { useState } from 'react';
import { useOrderStore } from '../stores/order';

export const Example: React.FC = () => {
  // Gebruik de volledige store:
  const order = useOrderStore();
  // Of een slice:
  const id = useOrderStore((s) => s.id);

  const [idInput, setIdInput] = useState('');

  return (
    <div>
      <p>
        Order id: {order.id}
      </p>
      <p>
        <input value={idInput} onChange={(e) => setIdInput(e.currentTarget.value)} />
        <button onClick={() => order.setId(idInput)}>Set order id</button>
      </p>
    </div>
  );
};
`}
    />
  </div>
);
