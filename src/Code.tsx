import React from 'react';

export interface Props {
  language?: string;
  code: string;
}

export const CodeBlock: React.FC<Props> = ({ language, code }) => (
  <pre>
    <code className={`language-${language}`}>
      {code.trim()}
    </code>
  </pre>
);

export const InlineCode: React.FC<Props> = ({ language, code }) => (
  <code className={`language-${language}`}>
    {code}
  </code>
);

