import React, { Component } from 'react';
import axios from 'axios'
import {storeProducts,detailProduct} from './data'
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


const ProductContext=React.createContext();

 class ProductProvider extends Component {
     state={
         products:storeProducts,
         detailProduct:detailProduct,
         cart:[],
         modalOpen:false,
         modelProduct:detailProduct,
         cartSubTotal:0,
         cartTax:0,
         cartTotal:0,
         email:null,
         password:null,
         firstName:null,
         lastName:null,
         isAuth:false,
     }

    
logout=(history)=>{
    if(this.state.isAuth){
        
         
    console.log(history);
    
            localStorage.removeItem('token');
            localStorage.removeItem('userId');
            this.setState(()=>{
                return {isAuth:false};
            },()=>{
               history.replace('/signin')
            })
    }
    

            
             
}

tryautosignin=()=>{
    const token = localStorage.getItem('token')
        if(!token){
            this.logout()
        }
        else{
            this.setState({isAuth:true})
            
        }
}
setProducts=()=>{
    let tempProducts=[];
    storeProducts.forEach(item=>{
        const temp={...item};
        tempProducts=[...tempProducts,temp];
    });
    this.setState({products:tempProducts});
};
signin=(e,history)=>{
    e.preventDefault();
    const authData={
        email:this.state.email,
        password:this.state.password,
        returnSecureToken:true
    }
    console.log(this.state.email,authData.email)
   const url= "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAE0oDZHowCczpHaJ4V3v6l1IMOYD0cA0k"
    axios.post(url,authData)
    .then(response=>{
            localStorage.setItem('token',response.data.idToken)
            localStorage.setItem('userId',response.data.localId)
            this.setState({isAuth:true,signin:true}) 
            history.replace('/product') 
            
    })
    .catch(err=>{
        alert(err.response.data.error.message)
        this.setState({isAuth:false,signin:false});
    })
    
}
redirectToProduct=(history)=>{
console.log("context",history);

}
signup=(e,history)=>{
    e.preventDefault();
    const authData={
        email:this.state.email,
        password:this.state.password,
        returnSecureToken:true
    }
   const url= "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAE0oDZHowCczpHaJ4V3v6l1IMOYD0cA0k"
    axios.post(url,authData)
    .then(response=>{
            localStorage.setItem('token',response.data.idToken)
            localStorage.setItem('userId',response.data.localId)
        const userData={
            email:this.state.email,
            password:this.state.password,
            firstname:this.state.firstName,
            lastName:this.state.lastName,
            userId:localStorage.getItem('userId')
        }
        this.setState({isAuth:true,signin:true})
        axios.post("https://online-mobile-shopping-c693f.firebaseio.com/users.json",userData);
        history.push('/product')
    })
    .catch(err=>{
        this.setState({isAuth:false,signin:false})
        alert(err.response.data.error.message)  
    })
}

getItem=(id)=>{
    const product =this.state.products.find(item=>item.id===id);
    return product;
}
componentDidMount(){
    this.setProducts();
    this.tryautosignin();
    
}
handleDetail=(id)=>{
     const product=this.getItem(id);
     this.setState({detailProduct:product})
}
handleChange=(e)=>{
    console.log(e.target.type," ",e.target.value)
    this.setState({[e.target.id]:e.target.value})
}
addToCart=(id)=>{
     let tempProducts = [...this.state.products];
     const index = tempProducts.indexOf(this.getItem(id));
     const product = tempProducts[index];
     product.inCart=true;
     product.count=1;
     let today = new Date();
    let date=today.getDate() + "-"+ parseInt(today.getMonth()+1) +"-"+today.getFullYear()+"-"+today.getHours()+":"+today.getMinutes();
     product.time=date ;
     const price=product.price;
     product.total=price;
     this.setState(()=>{
         return {products:tempProducts,cart:[...this.state.cart,product]};
     },()=>{
         console.log(this.state.cart);
         
         this.addTotals();
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
increment=(id)=>{
    let tempCart =[...this.state.cart];
    const selectedProduct = tempCart.find(item=>item.id===id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count=product.count+1;
    product.total= product.count * product.price;
    this.setState(()=>{
        return{cart:[...tempCart]}
    },()=>{this.addTotals()})
    
}
decrement=(id)=>{
    let tempCart =[...this.state.cart];
    const selectedProduct = tempCart.find(item=>item.id===id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count=product.count-1;
    if(product.count===0){
        this.removeItem(id);
    }
    else{
        product.total= product.count * product.price;
    this.setState(()=>{
        return{cart:[...tempCart]}
    },()=>{this.addTotals()})
    }
    

}
removeItem=(id)=>{
    let tempProducts=[...this.state.products];
    let tempCart = [...this.state.cart]   
    tempCart=tempCart.filter(item=>item.id!==id);
    const index = tempProducts.indexOf(this.getItem(id));
    let removedProduct= tempProducts[index]; 
    removedProduct.inCart=false;
    removedProduct.count=0;
    removedProduct.total=0;
    this.setState(()=>{
        return {
            cart:[...tempCart],
            products:[...tempProducts]
        }
    },()=>{
        this.addTotals();
    })

}
clearCart=()=>{
    this.setState(()=>{
        return {
            cart:[]
        }
    },()=>{
        this.setProducts();
        this.addTotals();
    })
    
}
addTotals=()=>{
    let subTotal=0;
    this.state.cart.map(item=>(subTotal += item.total));
    const tempTax=subTotal*0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total=subTotal+tax;
    this.setState(()=>{
        return {
            cartSubTotal:subTotal,
            cartTax:tax,
            cartTotal:total
        }
    })
}
reset =(e,history)=>{
    e.preventDefault();
    const email=e.target.value;
    this.setState({email})
    var auth = firebase.auth();
    var emailAddress =this.state.email;
    auth.sendPasswordResetEmail(emailAddress)
    .then(response=>{
        alert(`Email has be sent to ${emailAddress} . Please verify`)
        history.push('/signin')
        
    })
    .catch(err=>{
     
        
       alert(err.message)
        
    })
  
    
}
render() {
    if (!firebase.apps.length) {
        var firebaseConfig = {
        apiKey: "AIzaSyAE0oDZHowCczpHaJ4V3v6l1IMOYD0cA0k",
    authDomain: "online-mobile-shopping-c693f.firebaseapp.com",
    databaseURL: "https://online-mobile-shopping-c693f.firebaseio.com",
    projectId: "online-mobile-shopping-c693f",
    storageBucket: "online-mobile-shopping-c693f.appspot.com",
    messagingSenderId: "144891928857",
    appId: "1:144891928857:web:d9cd325f2419a5ea39e588",
    measurementId: "G-K4Z3B2WCZK"
      };
      firebase.initializeApp(firebaseConfig);
    }
    
    return (
        <ProductContext.Provider value={{
            ...this.state,
            handleDetail:this.handleDetail,
            addToCart:this.addToCart,
            openModel:this.openModel,
            closeModel:this.closeModel,
            increment:this.increment,
            decrement:this.decrement,
            removeItem:this.removeItem,
            clearCart:this.clearCart,
            handlechange:this.handleChange,
            signin:this.signin,
            signup:this.signup,
            logout:this.logout,
            redirectToProduct:this.redirectToProduct,
            reset:this.reset
          
        }}>   
            {this.props.children}   
        </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider,ProductConsumer};