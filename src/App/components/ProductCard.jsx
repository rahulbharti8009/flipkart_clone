import React from 'react'

export const ProductCard = ({item , index}) => {
  return (
         <div className='top-deals-card'>
           <img className='' style={{backgroundColor:'#ffffff'}} src={`${item.thumbnail}`} alt="" />
           <label title=''>{`${item.title}`}</label>
           </div>
)
}
