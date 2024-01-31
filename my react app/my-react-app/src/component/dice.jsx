import React, { useState } from 'react';

export default function Dice() {
  const [DiceNum, setDiceNum] = useState(1);

  const refreshDice = () => {
    const rNum = Math.floor(Math.random() * 6) + 1;
    setDiceNum(rNum);
  };

  return (
    <div>
      <img src={require(`../img/${DiceNum}.png`)} alt={DiceNum}></img>
      <button onClick={() => refreshDice()}>Click</button>        
    </div>
  )
}


