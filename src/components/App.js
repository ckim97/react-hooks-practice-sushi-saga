import React,{useEffect, useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([]);
  const [money, setMoney] = useState(100);
  const [sushiIsEaten, setSushiIsEaten] = useState([]);
  console.log(sushiIsEaten);

  function handleSushiEaten(item) {
    setSushiIsEaten(prevSushiIsEaten => [...prevSushiIsEaten,item]);
  }

  function handleSettingMoney(price) {
    setMoney(money - price);
  }

  useEffect(() => {
    fetch("http://localhost:3001/sushis")
      .then(r => r.json())
      .then(data => setSushis(data));
  },[])

  return (
    <div className="app">
      <SushiContainer sushis={sushis} handleSushiEaten={handleSushiEaten} handleSettingMoney={handleSettingMoney} money={money}/>
      <Table money={money} sushiIsEaten={sushiIsEaten}/>
    </div>
  );
}

export default App;
