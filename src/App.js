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


class App extends Component {
  render(){
  
    
    return (
      <React.Fragment>
        <NavBar />
      
    <Switch>
      <Route path='/details'  component={Details} />
      <Route path='/cart'  component={Cart} />
      <Route path='/signin'  component={Signin} />
      <Route path='/signup'  component={Signup} />
      
       <Route path='/' exact component={ProductList} />
      <Route component={Default} />
    </Switch>
    <Model />
    
        
      </React.Fragment>
      );
  }
  
}

export default App;
