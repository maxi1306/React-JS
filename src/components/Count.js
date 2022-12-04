import React, { useState } from "react"
import { useEffect } from "react"
import './Count.css'

export const Count = ({initial, stock, onAdd}) => {
    const [count, setCant] = useState(parseInt(initial))

    const decrease = ()=>{
        setCant(count -1);
    } 
    const increase = ()=>{
        setCant(count + 2) ;
      
    }  
    
    useEffect (() => {
        setCant(parseInt(initial));
    },[initial])
    
  return (
    <>
            <div className="count">
                <button disabled={count <= 1} onClick={decrease}> - </button>
                <p><b>{count}</b></p>
                <button disabled={count >= stock} onClick={increase}> + </button>
                <div>
                    <button disabled={stock <= 0} onClick={() => onAdd(count)} className="buttomDetail">Agregar al Carrito</button>
                </div>
            </div>
            
        </>
  )
}
