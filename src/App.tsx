// src/App.tsx
import React from 'react';
import './App.css';
import Body from './components/body';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className='header'>
        <h1> LISTADO DE POKEMONS</h1>
        <img className='logo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8UVWJtz6ehDlyOp-c1XTMQPOSVH8BPL8s5g&s" alt="" />
      </div>
    
      <Body />
    </div>
  );
};

export default App;
