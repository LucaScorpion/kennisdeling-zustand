import create from 'zustand';

export interface OrderStore {
  id?: string;
}

export const useOrderStore = create<OrderStore>();
