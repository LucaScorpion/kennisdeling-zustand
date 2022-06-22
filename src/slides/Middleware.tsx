import React from 'react';
import { CodeBlock } from '../components/Code';

export const Middleware: React.FC = () => (
  <div>
    <h2>Middleware</h2>
    <ul>
      <li>Zustand heeft een aantal standaard middlewares:</li>
      <li>Persistence (naar bijv. localStorage)</li>
      <li>Redux (als je reducers en dispatchers wil gebruiken)</li>
      <li>Redux DevTools</li>
      <li>Custom middleware schrijven is natuurlijk ook mogelijk</li>
    </ul>
    <p>
      Redux DevTools middleware in actie:
    </p>
    <CodeBlock language="tsx" code={`
export const usePostStore = create<PostStore>(devtools((set) => ({
  loading: false,
  getPost: async (id) => {
    set({ loading: true });
    const res = await fetch(\`http://jsonplaceholder.typicode.com/posts/\${id}\`);
    const post = await res.json();
    set({ post, loading: false });
  },
}), {
  name: 'PostStore',
}));
    `} />
  </div>
);
