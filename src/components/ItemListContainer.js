import React, { useEffect, useState } from "react"
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import ItemList from './ItemList'
import { useNavigate, useParams } from 'react-router-dom';
import Filter from "./filter/Filter";

export const ItemListContainer = () => {

    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const { categoryId } = useParams();

    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'products');
        if (categoryId) {
            const queryFilter = query(queryCollection, where('category', '==', categoryId))
            getDocs(queryFilter)
                .then(res => setData(res.docs.map(products => ({ id: products.id, ...products.data() }))))
        } else {
            getDocs(queryCollection)
                .then(res => setData(res.docs.map(products => ({ id: products.id, ...products.data() }))))
        }
       
    }, [categoryId]);


    const handleDetail = (products) => {
        navigate(`/itemDetalles/${products.id}`);
      }

    return (
        <div>
            <Filter></Filter>
            <div>
                <ItemList item={data} goToDetail={handleDetail}></ItemList>
            </div>
        </div>
    )
}


export default ItemListContainer;





























// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import Card from "./card/index";

// const ItemListContainer = () => {

//   const [productsList, setProductsList] = useState([]);

//   useEffect(() => {
//     const ItemContainer = async () => {

//       try {
//         const data = await fetch('https://636593c5046eddf1baf001f8.mockapi.io/productos', {
//           method: 'GET',
//           headers: {
//             'Content-Type': 'application/json'
//           }
//         });
//         const dataProducts = await data.json();
//         setProductsList(dataProducts);
//       } catch (error) {
//         console.log(error);
//       }
//     }
//     ItemContainer();


//   }, []);
//   return (

//     <div className="list-container">
//       {productsList.length > 0 ? productsList.map(product => (
//         <div key={product.id} className='container'>
//           <h1 className="title">{product.model}</h1>
//           <div className="card-image">
//           <img className="image" src={product.image} alt="image" />
//           </div>
//           <button className="buttomDetail">
//           <i class="iconInfo bi bi-info-circle"><Link to={`/detalles/${product.id}`} >Ver Detalles</Link></i>
//           </button>

//         </div>
//       )) : <p>Products Loading...</p>}

//     </div>
//   );
// }
// export default ItemListContainer;