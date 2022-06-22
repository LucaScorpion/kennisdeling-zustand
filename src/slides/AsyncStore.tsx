import React, { useState } from 'react';
import { CodeBlock } from '../components/Code';
import { usePostStore } from '../stores/post';
import { ExternalLink } from '../components/ExternalLink';

export const AsyncStore: React.FC = () => {
  const post = usePostStore();
  const [idInput, setIdInput] = useState('1');

  return (
    <div>
      <h2>Async acties in de store</h2>
      <CodeBlock language="typescript" code={`
import create from 'zustand';

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

export const usePostStore = create<PostStore>((set) => ({
  loading: false,
  getPost: async (id) => {
    set({ loading: true });
    const res = await fetch(\`http://jsonplaceholder.typicode.com/posts/\${id}\`);
    const post = await res.json();
    set({ post, loading: false });
  },
}));
    `}
      />
      <p>
        Laad een post van <ExternalLink to="https://jsonplaceholder.typicode.com">JSONPlaceholder</ExternalLink>.
      </p>
      <p>
        <input type="number" min={1} value={idInput} onChange={(e) => setIdInput(e.currentTarget.value)} />
        <button onClick={() => post.getPost(idInput)}>Load</button>
      </p>
      <p>
        {post.loading
          ? 'Loading...'
          : post.post
            ? post.post.title
            : 'Geen post geladen.'}
      </p>
    </div>
  );
};
