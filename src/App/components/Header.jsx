import React from 'react'
import { CiSearch } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";

export const SearchComponent=()=> {
return <>
<div className="search">
               <CiSearch style={{mixBlendMode: 'multiply', backgroundColor:'#ffffff'}}/>
                <input className='input_search' type="text"  placeholder='Search here'/>
            </div>
</>
}

const Header = () => {
  return (
    <div className='header'>
        <i class="ri-menu-2-line" onClick={()=>{
          console.log("drawer");
        }}></i>
            <img className='ic_flipkart' style={{backgroundColor:'#ffffff'}} src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" alt="" />
           <div className='header-search'>
           <SearchComponent />
           </div>
            <div className="nav-right">
            <h4>Login</h4>
            <h4>Cart</h4>
            <h4>Become a Seller</h4>
            </div>
    </div>
  )
}

export default Header
