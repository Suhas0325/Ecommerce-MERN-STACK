import React, { useState } from 'react'
import './Navbar.css'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [menu,setMenu] = useState("shop")

  return (
    <div className='navbar'>
        <div className="nav-logo">
            <Link to='/' style={{textDecoration: 'none'}}><p>SHOPPERS ZONE</p></Link>
        </div>
        <ul className='nav-menu'>
            <li className={menu === "shop" ? "active" : "nu"} onClick={() => { setMenu("shop") }}><Link style={{textDecoration: 'none', color: 'black'}} to='/'>Shop</Link></li>
            <li className={menu === "men" ? "active" : "nu"} onClick={() => { setMenu("men") }}><Link style={{textDecoration: 'none', color: 'black'}} to='/men'>Men</Link></li>
            <li className={menu === "women" ? "active" : "nu"} onClick={() => { setMenu("women") }}><Link style={{textDecoration: 'none', color: 'black'}} to='/women'>Women</Link></li>
            <li className={menu === "kids" ? "active" : "nu"} onClick={() => { setMenu("kids") }}><Link style={{textDecoration: 'none', color: 'black'}} to='kids'>Kids</Link></li>
        </ul>

        <div className="nav-login-cart">
            <Link to='/login'><button>Login</button></Link>
            <Link to='/cart'><img src={cart_icon} alt="" /></Link>
            <div className="nav-cart-count">0</div>
        </div>
      
    </div>
  )
}

export default Navbar
