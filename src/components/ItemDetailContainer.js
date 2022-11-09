import React, { useEffect, useState } from "react";

const ItemDetailContainer = () => {

  const [productsDetail, setProductsDetail] = useState([]);

  useEffect(() => {
    const ItemContainer = async () => {

      try {
        const data = await fetch('https://636593c5046eddf1baf001f8.mockapi.io/productos', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const dataProducts = await data.json();
        setProductsDetail(dataProducts);
      } catch (error) {
        console.log(error);
      }
    }
    ItemContainer();


  }, []);

  return (
    <div>
      {productsDetail.length > 0 ? productsDetail.map(product => (
        <div key={product.id} className='container'>
          <h1 className="title">{product.model}</h1>
          <div className="card-image">
            <img className="image" src={product.image} alt="image" />
          </div>
          <p className="card-cate">Tecnologia: {product.tecnologia}</p>
          <p className="card-descr">Price: {product.price}</p>
          <p className="card-dime">Dimensiones: {product.dimensiones}</p>

        </div>
      )) : <p>Product Loading...</p>}

    </div>
  );
}
export default ItemDetailContainer;