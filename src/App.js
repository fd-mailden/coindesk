import React from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useState, useEffect} from 'react';

import './App.css';
import { fetchCustomens, fetchETHUSDT } from './asynsAction/custmers';
import BarChart from './components/BarChart';

function App() {
  const dispatch = useDispatch();
  
  const cards = useSelector(state => state.cards.cards);
  const [buyBTC, setBuyBTC] = useState(null)
  const [buyETH, setBuyETH] = useState(null)
  const [buyDOGE, setBuyDOGE] = useState(null)
  const [buyBNB, setBuyBNB] = useState(null);
  const [count, setCount] = useState(0);
  
  const getBTC  = () =>{
    dispatch(fetchCustomens());
   
    // cards.map(card=>{
    //    if(card.symbol === "BTCUSDT"){
    //   setBuyBTC(card.price);
    // }
    // else if (card.symbol === "ETHUSDT"){
    //   setBuyETH(card.price)
    // }
    // else if (card.symbol === "DOGEUSDT"){
    //   setBuyDOGE(card.price)
    // }
    // else if (card.symbol === "BNBUPUSDT"){
    //   setBuyBNB(card.price)
    // }
    // });
  }


  // setInterval(() =>{
  //   getBTC();

  //   setCount(count => count + 1)
  // }
  //  , 5000);
 

  console.log(count)

  return (
    <div className="App">
    <button onClick = { ()=>getBTC()}>disatch</button>
    {/* <div>{buyBTC}</div>
    <div>{count}</div> */}

    <BarChart 
    // title = {cards.symbol}
    // props = {cards.price}
    />

    </div>
  );
}

export default App;
