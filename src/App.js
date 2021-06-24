import React from 'react'
import './App.scss';
import Deck from './../src/components/Deck/index'

function App() {
  return(
    <div className="App">
      <header className="App-header">
        <h1>Table</h1>
        <Deck title="Table" path="table"  flipped="2"/>
        <h1>Hand</h1>
        <Deck title="Hand" path="hand"  flipped="2"/>
      </header>
    </div>
  );
}

export default App;
