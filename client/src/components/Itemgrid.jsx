import React from 'react'
import Itemcard from './Itemcard'
import "../styles/itemcard.css"
const Itemgrid = (props) => {
  return (
    <div><div className='grid-title'>{props.title}</div><div className='item-grid'>{props.best_array.map((best_array,i)=>{
      
        return <Itemcard best_array={best_array} key={i} i={i} appendfn={props.appendfn} inc={props.inc} dec={props.dec} cart_array={props.cart_array} ></Itemcard>
     
  

    })}</div></div>
  )
}

export default Itemgrid