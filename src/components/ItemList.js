import React from "react";
import Item from "./Item";


const ItemList = ({ item = [], goToDetail }) => {
 
  return (
      
    <div className="list-Container">
      {item.map(products => <Item key={products.id} item={products} goToDetail={goToDetail} />)}
    </div>
  );
  
};

export default ItemList;