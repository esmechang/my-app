import './App.css';
import React from 'react';
import Member from './member.js';
import jin from './jin.jpeg';
import v from './v.png'; 

function App() {
  return (
    <div className="App">
      <Member picture={jin} />
      <Member picture={v} />
    </div>
  );
}

export default App;
