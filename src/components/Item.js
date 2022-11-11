import React from 'react';
import { useNavigate } from 'react-router-dom'

const Item = ({ item }) => {
  const { id, image, model } = item;
  const navigate = useNavigate();
  const handleDetail = () => {
    navigate(`/itemDetalles/${id}`, { state: item });
  }


  return (
    <div key={id} className="container">
      <div className="card-image">
        <img src={image} alt="imageProduct" className="image" />
      </div>
      <h2 className='title'>{model}</h2>
      <button className="buttomDetail" onClick={handleDetail}>VER MAS DETALLES</button>
    </div>
  )
};


export default Item;
