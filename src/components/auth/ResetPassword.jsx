import React, { Component } from "react";
import {Link} from 'react-router-dom'
import {ButtonContainer} from '../Button.js'
import {ProductConsumer} from '../../context'

export default class ResetPassword extends Component {
    render() {
        return (
                <ProductConsumer >
                {value=>{
                    const {handlechange,reset}=value;
                    return(
                        <form onSubmit={(event)=>reset(event,this.props.history)}>
                <div style={{width:'50%',margin:"auto"}}>
                <div className="form-group mt-1 py-1">
                    <label>Email address</label>
                    <input type="email" id='email' className="form-control" placeholder="Enter email" onChange={(event)=>handlechange(event)} />
                </div>
                <ButtonContainer>Send Mail</ButtonContainer>
                </div>
            </form>
                    )
                }}
            </ProductConsumer>

        );
    }
}