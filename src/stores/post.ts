import create from 'zustand';
import { devtools } from 'zustand/middleware';

export interface PostStore {
  post?: Post;
  loading: boolean;
  getPost: (id: string) => Promise<void>;
}

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export const usePostStore = create<PostStore>(devtools((set) => ({
  loading: false,
  getPost: async (id) => {
    set({ loading: true });
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post = await res.json();
    set({ post, loading: false });
  },
}), {
  name: 'PostStore',
}));
