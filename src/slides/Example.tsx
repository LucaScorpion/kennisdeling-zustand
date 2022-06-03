import React, { useState } from 'react';
import { useOrderStore } from '../stores/order';

export const Example: React.FC = () => {
  const order = useOrderStore();
  const [idInput, setIdInput] = useState('');

  return (
    <div>
      <h2>Voorbeeld</h2>
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
