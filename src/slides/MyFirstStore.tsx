import React from 'react';

export const MyFirstStore: React.FC = () => (
  <div>
    <h2>My first store</h2>
    <pre>
      <code className="language-typescript">
{`import create from 'zustand';

export interface OrderStore {
  id: string;
  setId: (id: string) => void;
}

export const useOrderStore = create<OrderStore>((set) => ({
  id: 'some-id',
  setId: (id) => set({ id }),
}));
`}
      </code>
    </pre>
  </div>
);
