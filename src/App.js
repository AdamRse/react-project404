import logo from './logo.svg';
import './App.css';
import Square, { useState } from './component/Square';

function App() {
  return (
    <div className='app text-center'>
      <h1 className='font-bold mb-5 text-3xl'>Stéphane SuperMorpion</h1>
      <div>
        <div>
          <Square number="0" onclick></Square>
          <Square number="1"></Square>
          <Square number="2"></Square>
        </div>
        <div>
          <Square number="3"></Square>
          <Square number="4"></Square>
          <Square number="5"></Square>
        </div>
        <div>
          <Square number="6"></Square>
          <Square number="7"></Square>
          <Square number="8"></Square>
        </div>
      </div>
      <h2 className=''>Généré par superReact et superTailwind</h2>
    </div>
  );
}

//Tuto : https://react.dev/learn/tutorial-tic-tac-toe

export default App;
