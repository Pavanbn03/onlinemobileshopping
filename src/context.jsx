import React, { Component } from 'react'
import {storeProducts,detailProduct} from './data'

const ProductContext=React.createContext();

 class ProductProvider extends Component {
     state={
         products:storeProducts,
         detailProduct:detailProduct,
         cart:[],
         modalOpen:false,
         modelProduct:detailProduct
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
     let tempProducts = [...this.state.products];
     const index = tempProducts.indexOf(this.getItem(id));
     const product = tempProducts[index];
     product.inCart=true;
     product.count=1;
     const price=product.price;
     product.total=price;
     this.setState(()=>{
         return {products:tempProducts,cart:[...this.state.cart,product]};
     })
}
openModel=id=>{
    const product=this.getItem(id);
    this.setState(()=>{
        return {modelProduct:product,modalOpen:true}
    })
}
closeModel=()=>{
    this.setState(()=>{
    return {modalOpen:false};
})
}
render() {
    return (
        <ProductContext.Provider value={{
            ...this.state,
            handleDetail:this.handleDetail,
            addToCart:this.addToCart,
            openModel:this.openModel,
            closeModel:this.closeModel
        }}>   
            {this.props.children}   
        </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider,ProductConsumer};