import React from 'react';
import './App.css';
import Main from '../src/components/Main';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App container-fluid p-0">
      <Main />
    </div>
    </BrowserRouter>
  );
}

export default App;
