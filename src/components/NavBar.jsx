import React, { Component } from 'react'
import {Link,withRouter} from 'react-router-dom'
import Logo from '../logo.svg'
import styled from 'styled-components'
import {ButtonContainer} from './Button';
import {ProductConsumer} from '../context'
export  class NavBar extends Component {
    render() {
        return (
            
            <ProductConsumer >
                {value=>{
                    const {isAuth}=value;
                    const {logout}=value;
                    
                    const history = this.props.history
                    return(
                        <NavWrapper className='navbar navbar-expand-sm navbar-dark px-sm-5'>
                        {isAuth ? (<Link to='/'>
                <img src={Logo} alt="store" className="brand" />
            </Link>):null}
            {isAuth ?(<React.Fragment><ul className="navbar-nav align-items-center">
                <li className="nav-item ml-5">
                    <Link to='/' className='nav-link'>products</Link>
                </li>
                <li className="nav-item ml-5"style={{listStyleType:"none"}}>
                    <Link to='/orders' className='nav-link'>
                    <i className="fas fa-sort"> Orders</i></Link>
                </li>
                <li className="nav-item ml-5"style={{listStyleType:"none"}}>
                    
                    <Link to='/logout' className='nav-link' onClick={()=>logout(history)}>
                    <i className="fas fa-sign-in-alt"> Logout</i></Link>
                </li>
            </ul>
            <Link  to='/cart' className='ml-auto'>
                <ButtonContainer>
                    <span className='mr-2'>
                        <i className="fas fa-cart-plus"> My Cart</i></span>
                    
                </ButtonContainer>
            </Link></React.Fragment>): null}
            
            {!isAuth ? (<React.Fragment>
                <ul className="navbar-nav align-items-center">
            <li className="nav-item ml-5"style={{listStyleType:"none"}}>
                    <Link to='/signin' className='nav-link'>
                    <i className="fas fa-sign-in-alt"> Login</i></Link>
                </li>
            </ul>
            </React.Fragment>):null}
            </NavWrapper>
                    )
                }}
            </ProductConsumer>
            
        );
    }
}
export default withRouter(NavBar) ;
const NavWrapper=styled.nav`
background:var(--mainBlue);
.nav-link{
    color:black;
    font-size:1.3rem;
    text-transform:capitalize;
}
`