import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import Button from './Button';
import './App.css';

function App() {
  const [state, setState] = useState<string>('')

  useEffect(() => {
    const id = document.getElementById('hiß∂')?.id || '';
    setState(id);
  }, [])
  return (
    <div className="App">
      <header className="App-header">
          <Button id="hiß∂" name="one">Hi</Button>
          {state}
      </header>
    </div>
  );
}

export default App;
