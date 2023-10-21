import React from 'react';
import './App.css';
import {Home} from "./pages/Home";
import {Contact} from "./pages/Contact";
import {About} from "./pages/About";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          href="https://reactjs.org"
        >
          Learn React
        </a>
      </header>
        <Contact />
    </div>
  );
}

export default App;
