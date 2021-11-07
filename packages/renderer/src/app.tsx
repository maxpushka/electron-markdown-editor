import React, { useCallback, useState } from 'react';
import Editor from './editor';
import Preview from './preview';
import './app.css';

const defaultDoc = `
Hello, World!
=============

## Heading 2
### Heading 3

\`\`\`js
console.log('text');

function test() {
  return 42;
}
\`\`\`

- List item 1
- List item 2
- List item 3

1. List item 1
2. List item 2
3. List item 3

> Quote
`;

const App: React.FC = () => {
  const [doc, setDoc] = useState<string>(defaultDoc);

  const handleDocChange = useCallback(newDoc => {
    setDoc(newDoc);
  }, []);

  return (
    <div className='app'>
        <Editor onChange={handleDocChange} initialDoc={doc} />
        <Preview doc={doc} />
    </div>
  )
}

export default App;