import React, { Component } from 'react'
import image from './asset/online.png'
import {Link} from 'react-router-dom'
import {ProductConsumer} from '../context'

export default class HomePage extends Component {
    render() {
        return (
           <ProductConsumer>
               {value=>{
                   const {isAuth}=value;
                   return(
                    <React.Fragment>
                    <img src={image} style={{width:'100%',height:'100%'}} alt="background"/>
                    <div className='homediv'>
                         {isAuth ? <Link to='/product'><button className='homebtn'>Buy Now</button></Link>: <Link to='/signin'><button className='homebtn'>Buy Now</button></Link>}
                    </div>
                   
                    
                </React.Fragment>
                   )
               }}
           </ProductConsumer>
        )
    }
}
