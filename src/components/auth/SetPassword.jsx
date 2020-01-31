import React, { Component } from "react";
import './Login.css'
import {Link} from 'react-router-dom'
import {ProductConsumer} from '../../context'

export default class SetPassword extends Component {
    render() {
        return (
            <ProductConsumer >
                {value=>{
                    const {handlechange}=value;
                    return(
                        <form >
                <div style={{width:'50%',margin:"auto"}}>
                <div className="form-group mt-1 py-1">
                    <label>New Password</label>
                    <input type="password" id='password' className="form-control" placeholder="Password" onChange={(event)=>handlechange(event)} />
                    <input type="password" id='password' className="form-control" placeholder="Re-enter Password" onChange={(event)=>handlechange(event)} />
                </div>

                </div>
            </form>
                    )
                }}
            </ProductConsumer>
        )
    }
}
