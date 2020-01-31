import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Logo from '../logo.svg'
import styled from 'styled-components'
import {ButtonContainer} from './Button';
import {ProductConsumer} from '../context'
export default  class NavBar extends Component {
    render() {
        return (
            <ProductConsumer >
                {value=>{
                const {isAuth}=value;
                const {logout}=value;
                const history = this.props.history
                return(
                    <div id="topheader">
                        <nav class="navbar navbar-default">
               <div class="container-fluid">
                    <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                               <span class="sr-only">Toggle navigation</span>
                               <span class="icon-bar"></span>
                               <span class="icon-bar"></span>
                               <span class="icon-bar"></span>
                         </button>
                         {isAuth ? (<Link to='/product'>
            <img src={Logo} alt="store" />
        </Link>):null}
                        </div>
                        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        
                         {isAuth ?(<React.Fragment> <ul class="nav navbar-nav">
                             <li><Link to="/product">Products</Link></li>
                             <li><Link to="/orders"><i className="fas fa-sort"> Orders</i></Link></li>
                             <li> <Link to='/logout' onClick={()=>logout(history)}>
                                <i className="fas fa-sign-in-alt"> Logout</i></Link></li></ul>
                                <Link  to='/cart'>
                                <ButtonContainer>
                                    {/* <span className='mr-2'> */}
                                        <i className="fas fa-cart-plus"> My Cart</i>
                                </ButtonContainer>
                                </Link>
                         </React.Fragment>):null}
                         {!isAuth ? (<React.Fragment>
                            <ul>
                                 <li>
                                    <Link to='/signin'>
                                    <i className="fas fa-sign-in-alt">Login</i></Link>
                                </li>
                            </ul>
                         </React.Fragment>):null} 
                    </div>
               </div>
        </nav>
       </div>
    )
    }}
    </ProductConsumer>
    )
}
}

// {/* <ProductConsumer >
//             {value=>{
//                 const {isAuth}=value;
//                 const {logout}=value;
                
//                 const history = this.props.history
//                 return(
//                     <div id="topheader">
//                         <nav class="navbar navbar-default">
//                <div class="container-fluid">
//                     <div class="navbar-header">
//                     <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
//                                <span class="sr-only">Toggle navigation</span>
//                                <span class="icon-bar"></span>
//                                <span class="icon-bar"></span>
//                                <span class="icon-bar"></span>
//                          </button>
//                          {isAuth ? (<Link to='/product'>
//             <img src={Logo} alt="store" />
//         </Link>):null}
//                         </div>
//                         <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        
//                          {isAuth ?(<React.Fragment> <ul class="nav navbar-nav">
//                              <li><Link to="/product">Products</Link></li>
//                              <li><Link to="/orders"><i className="fas fa-sort"> Orders</i></Link></li>
//                              <li> <Link to='/logout' onClick={()=>logout(history)}>
//                                 <i className="fas fa-sign-in-alt"> Logout</i></Link></li></ul>
//                                 <Link  to='/cart'>
//                                 <ButtonContainer>
//                                     {/* <span className='mr-2'> */}
//     //                                     <i className="fas fa-cart-plus"> My Cart</i>
//     //                             </ButtonContainer>
//     //                             </Link>
//     //                      </React.Fragment>):null}
//     //                      {!isAuth ? (<React.Fragment>
//     //                         <ul>
//     //                              <li>
//     //                                 <Link to='/signin'>
//     //                                 <i className="fas fa-sign-in-alt">Login</i></Link>
//     //                             </li>
//     //                         </ul>
//     //                      </React.Fragment>):null} 
//     //                 </div>
//     //            </div>
//     //     </nav>
//     //    </div>
                
//     //             )}})
//     //     </ProductConsumer>  */}
               
