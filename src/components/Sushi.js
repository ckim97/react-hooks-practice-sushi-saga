import React, {useState, useEffect} from "react";

function Sushi({item, renderEating, isEaten}) {

  const [localIsEaten, setLocalIsEaten] = useState(isEaten);
  
  useEffect(() => {
    setLocalIsEaten(isEaten)
  }, [isEaten]);
  


  return (
    <div className="sushi">
      <div className="plate" onClick={() => renderEating(item.id)}>
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