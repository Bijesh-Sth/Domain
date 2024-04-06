import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Home from './Home';

function App() {
  const [showHome, setShowHome] = useState(false);

  const handleClick = () => {
    setShowHome(true);
  };

  return (
    <div className="container">
      <div className="center">
        {!showHome ? (
          <button onClick={handleClick}>Click me</button>
        ) : (
          <Home />
        )}
      </div>
    </div>
  );
}

export default App;
