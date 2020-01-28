import React, { Component } from "react";
import './Login.css';
import {Link} from 'react-router-dom'

export default class Login extends Component {
    render() {
        return (
            <form>
                <div style={{width:'50%',margin:"auto"}}>
                <div className="form-group mt-1 py-1">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    {/* Forgot <a href="#">password?</a> */}
                </p>
                <Link to='/signup' style={{textDecoration:"none"}}><p style={{textAlign:"center"}}>Create New Account</p></Link>
                </div>
            </form>
        );
    }
}