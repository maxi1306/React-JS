import React from "react";
import './styles.css';

const Card = ({ item, goToDetails}) => {
    const { model, image, price, tecnologia, dimensiones} = item;
    
    return (
        <div onClick={() => goToDetails(item)} className="card">
            <div className="card-image">
                <img className="card-image" src={image} alt={item.model} />
            </div>
            <div className="card-content">
                <p className='card-model'>{model}</p>
                <p className='card-tecnologia'>{tecnologia}</p>
                <p className="card-dimensiones">{dimensiones}</p>
                <p className="card-price">{price}</p>
            </div>
        </div>
    )
};

export default Card;