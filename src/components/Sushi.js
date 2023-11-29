import React, {useState} from "react";

function Sushi({item, isEaten, handleSushiEaten, handleSettingMoney, money}) {

  const [localIsEaten, setLocalIsEaten] = useState(isEaten)

  function handleClick() {
    if (item.price < money) {
      setLocalIsEaten(!isEaten);
      handleSushiEaten(item)
      handleSettingMoney(item.price);
    }
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleClick}>
        {localIsEaten ? null : (
          <img
            src={item.img_url}
            alt={item.name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {item.name} - ${item.price}
      </h4>
    </div>
  );
}

export default Sushi;

// return (
//   <div className="sushi">
//     <div className="plate" onClick={renderEating}>
//       {/* Tell me if this sushi has been eaten! */}
//       {false ? null : (
//         <img
//           src={item.img_url}
//           alt={item.name}
//           width="100%"
//         />
//       )}
//     </div>
//     <h4 className="sushi-details">
//       {item.name} - ${item.price}
//     </h4>
//   </div>
// );
// }

// export default Sushi;