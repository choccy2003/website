import React from 'react'
import Itemcard from './Itemcard'
import "../styles/itemcard.css"
import Filtergrid from './Filtergrid'
const Itemgrid = (props) => {
  return (

    <div><div><Filtergrid setarray={props.setarray} fetchData={props.fetchData} best_array={props.best_array} /></div>
      <div className='grid-title'>{props.title}</div><div className='item-grid'>{props.best_array.map((best_array, i) => {

        return <Itemcard best_array={best_array} key={best_array.id} i={i} appendfn={props.appendfn} inc={props.inc} dec={props.dec} cart_array={props.cart_array} ></Itemcard>



      })}</div></div>
  )
}

export default Itemgrid