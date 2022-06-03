import create from 'zustand';

export interface OrderStore {
  id: string;
  setId: (id: string) => void;
}

export const useOrderStore = create<OrderStore>((set) => ({
  id: 'some-id',
  setId: (id) => set({ id }),
}));
