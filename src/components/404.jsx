import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Default extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
                        <h1 className="display-3">404</h1>
                        <h1>error</h1>
                        <h2>page not found</h2>
                        <h3>the requested URL <span className="text-danger">{this.props.location.pathname}</span>was not found</h3><br></br>
                        <Link to='/'><h6 style={{fontWeight:'bold'}}>Why don't you go to our <strong style={{color:'black'}}>Home Page</strong>. Just Click here</h6></Link>
                        
                    </div>
                </div>
            </div>
        )
    }
}
