import React from "react";
import { useState } from "react"
import {MdRemoveCircleOutline, MdAddCircleOutline} from "react-icons/md";
import './Count.css'

export const Count = () => {
    const [cant, setCant] = useState(1)

    const sumarCant = ()=>{
        setCant(cant + 1)
    } 
    const reatarCant = ()=>{
        if(cant < 2 ) return
        setCant(cant - 1)
    }   
  return (
    <>
            <div className="count">
                <i  onClick={reatarCant}><MdRemoveCircleOutline/></i>               
                <p><b>{cant}</b></p>
                <i onClick={sumarCant}><MdAddCircleOutline /></i> 
            </div>
            
        </>
  )
}