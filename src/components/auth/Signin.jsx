import React, { Component } from "react";
import classes from './Login.css';
import {Link} from 'react-router-dom'
import {ProductConsumer} from '../../context'

export default class Login extends Component {
    render() {
        return (
        
                <ProductConsumer >
                {value=>{
                    const {handlechange,signin}=value;
                    return(
                        <form onSubmit={(event)=>signin(event,this.props.history)}>
                <div style={{width:'50%',margin:"auto"}}>
                <div className="form-group mt-1 py-1">
                    <label>Email address</label>
                    <input type="email" id='email' className="form-control" placeholder="Enter email" onChange={(event)=>handlechange(event)} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password"  id='password' className="form-control" placeholder="Enter password" onChange={(event)=>handlechange(event)}/>
                </div>
                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    {/* Forgot <a href="#">password?</a> */}
                </p>
                <Link to='/signup' style={{textDecoration:"none"}}><p style={{textAlign:"center"}}>Not have a account? Sign Up</p></Link>
                </div>
                <Link to='reset'><p style={{textAlign:"center"}}>Forget Password, Click Here</p></Link>
            </form>
                    )
                }}
            </ProductConsumer>
        
            
            
        );
    }
}