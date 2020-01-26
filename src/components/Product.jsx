import React, { Component } from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context';
export default class Product extends Component {
    render() {
        const {id,title,img,price,inCart}=this.props.product;
        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <div className="img-container p-5" onClick={()=>console.log("clicked")
                    }>
                    <Link to="/details">
                        <img style={{height :"12rem"}} src={img} alt="Product" className="cart-img-top" ></img>
                    </Link>
                    <button className="cart-btn" disabled={inCart ? true:false} onClick={()=>console.log("btn cart")}>
                    {inCart ? (<p className="text-capitalize mb-0" disabled>InCart</p>):(<i className="fas fa-cart-plus" />)}
                    </button>
                    
                    </div>
                </div>
                <div className="card-footer d-flex justify-content-between">
                    <p className="align-self-center mb-0">
                        {title}</p>
                        <h5 className="text-blue font-italic mb-0">
                            <span className="mr-1">${price}</span>
                        </h5>
                        </div>
            </ProductWrapper>
            
        )
    }
}

// 021821

const ProductWrapper = styled.div`
.card{
    border-color:transparent;
    transition: all 0.1s linear;

}
.card-footer{
    background:transparent;
    border-top:transparent;
    transition: all 0.4s linear;
    background-color:#fff;
}
&:hover{
    .card{
        border:0.04rem soild rgba(0,0,0,0.2);
        box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
    }
    .card-footer{
        background-color:rgba(247,247,247,0.3)

    }
}
`;