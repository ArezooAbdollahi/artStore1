import React , {useContext} from "react";
import { useItems } from "./ItemsProvider";
import { UserContext } from "./UserProvider";

export default function ItemsList(props) {
  const { items } = useItems();
  const {  handleAddToCartClick } = useContext(UserContext);


  return (
    <div className="artmain">
    
    <ul className="items-list">
      {items.map((item) => (
        <li key={item.name}>
          <img src={item.image} alt="" />
          <h3>{item.name}</h3>
          <div>${item.price}</div>
          <p>{item.description}</p>
          <button className="item" onClick={() => handleAddToCartClick(item)}>
            Add to Cart
          </button>
        </li>
      ))}
    </ul>
    </div>
  
  );
}
