import React,{Component} from 'react';
import {Route,Switch} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar'
import ProductList from './components/ProductList'
import Details from './components/Details'
import Cart from './components/Cart/Cart'
import Default from './components/Default'
import Model from './components/Model'
import Signin from './components/auth/Signin'
import Signup from './components/auth/Signup'
import {ProductConsumer} from './context'
import Orders from './components/Orders'


class App extends Component {
  render(){
  let routes=(
  <Switch>
    <Route path='/signin'  component={Signin} />
      <Route path='/signup'  component={Signup} />
      <Route component={Default} />
  </Switch>)
    
    return (
      
      <ProductConsumer>
        {value=>{
          const{isAuth}=value;
          if(isAuth){
            routes=(
              <Switch>
                <Route path='/details'  component={Details} />
      <Route path='/cart'  component={Cart} />
      <Route path='/orders'  component={Orders} />
       <Route path='/' exact component={ProductList} />
       <Route component={Default} />
              </Switch>
            )
          }
          return(
            <React.Fragment>
        <NavBar />
        {routes}
    <Model />
      </React.Fragment>
          )
        }}
      </ProductConsumer>
      );
  }
  
}

export default App;
