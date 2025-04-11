import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import TypesBar  from './components/TypesBar';
import PokemonsContainer from './components/PokemonsContainer';

function App() {
  const [type, setType] = useState("ice");

  return (
    <div className="wrapper">
      <h1 className="logo-pokemon">포켓몬 도감</h1>
      <TypesBar toggleType={setType} />
      <PokemonsContainer type={type} />
    </div>
  );
}

export default App;
