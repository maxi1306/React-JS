import React from 'react';

const Item = ({item, goToDetail}) => {
  const { id, image, model } = item;
  


  return (
    <div key={id} className="container">
      <div className="card-image">
        <img src={image} alt="imageProduct" className="image" />
      </div>
      <h2 className='title'>{model}</h2>
      <button className="buttomDetail" onClick={() => goToDetail(item)}>VER MAS DETALLES</button>
    </div>
  )
};


export default Item;
