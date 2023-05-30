//? Component for the shopping cart
import { useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import CartItem from "./CartItem";
import React from "react";


function ShoppingCart() {

    const location = useLocation();
    console.log(location.state.albumId)
    let album = location.state.albumId


const [cart, setCart] = useState([])
const [total, setTotal] = useState(0)


useEffect(() => {
    setCart([...cart, album])
    setTotal(total + album.price)   
}, [album]) 


// const addToCart = (album) => {
//     setCart([...cart, album])
//     setTotal(total + album.price)

// }
         

  return (
    <div>
      <h1>Shopping Cart</h1>

      if 
        {cart.map((album) => {
            return <CartItem key={album.id} album={album} />

        }
        )}



        {/* <CartItem album={album} cart={cart} />     */}
    </div>
  )
}

export default ShoppingCart
