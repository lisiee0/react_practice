import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { KBOTable } from './components/KBOTable'

function App() {
  const [count, setCount] = useState(0)

  const rankings = [
    { rank: 1, teamName: "LG", match: 12, win: 11, lose: 1, draw: 0, winningRate: 0.917, gameBehind: 0, isTopFive: true },
    { rank: 2, teamName: "삼성", match: 14, win: 9, lose: 5, draw: 0, winningRate: 0.643, gameBehind: 3, isTopFive: true },
    { rank: 3, teamName: "SSG", match: 11, win: 7, lose: 4, draw: 0, winningRate: 0.636, gameBehind: 3.5, isTopFive: true },
    { rank: 4, teamName: "두산", match: 14, win: 7, lose: 7, draw: 0, winningRate: 0.500, gameBehind: 5, isTopFive: true },
    { rank: 4, teamName: "KT", match: 13, win: 6, lose: 6, draw: 1, winningRate: 0.500, gameBehind: 5, isTopFive: true },
    { rank: 6, teamName: "NC", match: 11, win: 5, lose: 6, draw: 0, winningRate: 0.455, gameBehind: 5.5, isTopFive: false },
    { rank: 7, teamName: "KIA", match: 13, win: 5, lose: 8, draw: 0, winningRate: 0.385, gameBehind: 6.5, isTopFive: false },
    { rank: 7, teamName: "롯데", match: 14, win: 5, lose: 8, draw: 1, winningRate: 0.385, gameBehind: 6.5, isTopFive: false },
    { rank: 9, teamName: "키움", match: 14, win: 5, lose: 9, draw: 0, winningRate: 0.357, gameBehind: 7, isTopFive: false },
    { rank: 10, teamName: "한화", match: 14, win: 4, lose: 10, draw: 0, winningRate: 0.286, gameBehind: 8, isTopFive: false }
];

  return (
    <div>
      <KBOTable rankings={rankings} />
    </div>
  );
}

export default App
