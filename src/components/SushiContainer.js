import React, {useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({sushis, handleSushiEaten, handleSettingMoney, money}) {
  const [firstSushi, setFirstSushi] = useState(1);
  const [lastSushi, setLastSushi] = useState(4);

  const [isEaten, setisEaten] = useState(false);

  // function handleEaten() {
  //   setisEaten(!isEaten);
  // }



  const renderSushis = sushis.filter((sushi) => sushi.id >= firstSushi && sushi.id <= lastSushi);
  console.log(renderSushis);
  const renderPage = renderSushis.map((item) => <Sushi key={item.id} item={item} isEaten={isEaten} handleSushiEaten={handleSushiEaten} handleSettingMoney={handleSettingMoney} money={money}/>)

  function handleNextSushi() {
    setFirstSushi(firstSushi + 4);
    setLastSushi(lastSushi + 4);
  }

  

  return (
    <div className="belt">
      {renderPage}
      <MoreButton handleNextSushi={handleNextSushi}/>
    </div>
  );
}

export default SushiContainer;

// import React, { useState } from "react";
// import MoreButton from "./MoreButton";
// import Sushi from "./Sushi";

// function SushiContainer({ sushis }) {
//   const [firstSushi, setFirstSushi] = useState(1);
//   const [lastSushi, setLastSushi] = useState(4);

//   // Use an object to store the isEaten state for each sushi item
//   const [isEatenMap, setIsEatenMap] = useState({});

//   const renderSushis = sushis.filter(
//     (sushi) => sushi.id >= firstSushi && sushi.id <= lastSushi
//   );

//   const renderPage = renderSushis.map((item) => (
//     <Sushi
//       key={item.id}
//       item={item}
//       renderEating={() => renderEating(item.id)}
//       isEaten={isEatenMap[item.id]}
//     />
//   ));

//   function handleNextSushi() {
//     setFirstSushi(firstSushi + 4);
//     setLastSushi(lastSushi + 4);
//   }

//   // Update the isEaten state for the specific sushi item
//   function renderEating(sushiId) {
//     setIsEatenMap((prevMap) => ({
//       ...prevMap,
//       [sushiId]: !prevMap[sushiId],
//     }));
//   }

//   return (
//     <div className="belt">
//       {renderPage}
//       <MoreButton handleNextSushi={handleNextSushi} />
//     </div>
//   );
// }

// export default SushiContainer;
