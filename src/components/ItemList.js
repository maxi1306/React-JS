import React from "react";
import Item from "./Item";

const ItemList = ({ item }) => {
  return (
    <div className="list-Container">
      {item.map((product) => (
        <Item item={product}></Item>
      ))}
    </div>
  );
};

export default ItemList;