import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { Ruler } from '../../.';

function App() {
  return (
    <div className="App">
      <Ruler
        minScale={0}
        maxScale={100}
        initScale={50}
        onChange={(value: number) => {
          console.log('value', value);
        }}
      />
    </div>
  );
}

export default App;
