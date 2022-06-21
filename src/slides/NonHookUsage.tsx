import React from 'react';
import { CodeBlock, InlineCode } from '../components/Code';

export const NonHookUsage: React.FC = () => (
  <div>
    <h2>Store usage buiten componenten om</h2>
    <ul>
      <li>Store hook heeft functies
        voor <InlineCode code="getState" />, <InlineCode code="setState" />, <InlineCode code="subscribe" /></li>
    </ul>
    <CodeBlock language="ts" code={`
export class ApiService {
  public async getOrder(id: string): Promise<void> {
    const token = useAuthStore.getState().token;
    const order = await fetch(\`/api/orders/\${id}\`); // <- Use token here.
    useOrderStore.setState({ order });
    // Of, afhankelijk van de store:
    useOrderStore.getState().setOrder(order);
  }
}
`}
    />
    <ul>
      <li>Ook handig voor in tests</li>
    </ul>
    <CodeBlock language="ts" code={`
beforeEach(() => {
  useAuthStore.setState({});
});
    `} />
  </div>
);
