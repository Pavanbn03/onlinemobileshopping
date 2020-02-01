import React from 'react'
import image from '../asset/emptycart.png'
export default function Empty() {
    return (
        <div className="container mt-5">
            <div className="row"></div>
            <div className="col-10 mx-auto text-center text-title">
                <h1>your cart is currently empty</h1>
                <img src={image} alt="empty-cart"/>
            </div>

        </div>
    )
}
