import React, { Component } from "react";
import './Login.css'
import {Link} from 'react-router-dom'
import {ProductConsumer} from '../../context'

export default class SignUp extends Component {
    render() {
        return (
            <ProductConsumer>
                {value=>{
                    const {handlechange,signup}=value;
                    return(
                        <form onSubmit={(event)=>signup(event,this.props.history)}>
                <div style={{width:'50%',margin:"auto",marginTop:"20px"}}>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" id="firstName" className="form-control" placeholder="First name" onChange={(event)=>handlechange(event)} />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" id="lastName" className="form-control" placeholder="Last name" onChange={(event)=>handlechange(event)} />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" id="email" className="form-control" placeholder="Enter email" onChange={(event)=>handlechange(event)} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" id="password" className="form-control" placeholder="Enter password" onChange={(event)=>handlechange(event)} />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered? <Link to="/signin">Sign In</Link>
                </p>
                </div>
            </form>
                    )
                }}
            </ProductConsumer>
            
        );
    }
}