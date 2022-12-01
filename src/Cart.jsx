import { useState, useEffect, } from "react";
import './style/Cart.css';

const Cart = ({ cartData,onDeleteCat }) => {

    console.log(cartData)
    let totalPrice=0;
    return (
        <>
        {cartData.map((cat, index) => {
            totalPrice+=cat.price;
            return <CartItem key={index} onDeleteCat={onDeleteCat} className="cart-item" cat={cat}/>
        })}
        </>
    )

}

const CartItem = ({ cat,onDeleteCat }) => {
    console.log("c", cat)
    return (
        <div className="cart-item">
            <img src={cat.imgSrc} />
            <span>
            <p>{cat.name}</p>
            <p>{cat.breed}</p>
            <p>{cat.price}</p>
            <button onClick={()=>onDeleteCat(cat)} >Remove from Cart</button>
            </span>
        </div>
    )
}





export default Cart;