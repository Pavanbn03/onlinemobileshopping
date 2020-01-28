import React, { Component } from 'react'
import Product from './Product'
import Title from './Title'

import {ProductConsumer} from '../context'
export default class ProductList extends Component {

    render() {
        
        return (
            <React.Fragment>
                <div className='py-5'>
                {/* style={{backgroundImage:"linear-gradient(to right,white,#aaa"} */}
                    <div className="container">
                        <Title name='our' title='products' />
                        <div className="row">
                        <ProductConsumer>
                            {value=>{
                                const {isAuth}=value;
                                if(isAuth){
                                    return value.products.map( product =>{
                                    return <Product key={product.id} product={product} />
                                })
                                }
                                else{   
                                    return <h3>Please LogIn</h3>

                                }
                                
                                
                            }}
                        </ProductConsumer>
                        </div>

                        </div>
                    </div>
                
            </React.Fragment>

        
        )
    }
}
