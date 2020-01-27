import React, { Component } from 'react'
import {storeProducts,detailProduct} from './data'

const ProductContext=React.createContext();

 class ProductProvider extends Component {
     state={
         products:storeProducts,
         detailProduct:detailProduct
     }
setProducts=()=>{
    let tempProducts=[];
    storeProducts.forEach(item=>{
        const temp={...item};
        tempProducts=[...tempProducts,temp];
    });
    this.setState({products:tempProducts});
};
getItem=(id)=>{
    const product =this.state.products.find(item=>item.id===id);
    return product;
}
componentDidMount(){
    this.setProducts();
}
handleDetail=(id)=>{
     const product=this.getItem(id);
     this.setState({detailProduct:product})
}
addToCart=(id)=>{
     console.log("hello addToCart",id)
}
render() {
    return (
        <ProductContext.Provider value={{
            ...this.state,
            handleDetail:this.handleDetail,
            addToCart:this.addToCart
        }}>   
            {this.props.children}   
        </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider,ProductConsumer};