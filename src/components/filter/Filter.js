import React from 'react';
import './Filter.css';
import { NavLink } from 'react-router-dom';

const FilterAnime = () => {
    return(
<>
<section className='filter'>
<NavLink  to="/catagory/torno"  >Tornos</NavLink>
<NavLink  to="/catagory/cabina"  >Cabinas</NavLink>
<NavLink  to="/catalogo"  >Todos</NavLink>
</section>



</>
    )
}

export default FilterAnime;