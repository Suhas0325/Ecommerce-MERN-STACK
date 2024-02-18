import React from 'react'
import './Pagecss/ShopCategory.css'
import Item_cat from '../Components/Item/item_category'


const ShopCategory = (props) => {
  return (
    <div>
    <div className='head'>
      <div className='body'>
           <h1>FLAT 50% OFF</h1>
           <button>Explore now</button>
           </div>
        <div className='banner-image'>
          <img src={props.banner}></img>
        </div>
        </div>
        <div>
          <Item_cat />
        </div>
    </div>
   
  )
}

export default ShopCategory
