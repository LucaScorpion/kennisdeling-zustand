import React from 'react';
import { useOrderStore } from '../stores/order';

export const Example: React.FC = () => {
  const order = useOrderStore();

  return (
    <div>
      <h2>Voorbeeld</h2>
      <p>
        Order id: {order.id}
      </p>
    </div>
  );
};
