import React, { Component } from 'react'

export default class OrderDisplay extends Component {
    render() {
    
        
        return (
            <div style={{textAlign:"center",marginTop:"10px",display:"block"}}>
                <img src={this.props.img} style={{width:"6rem",height:"6rem"}} alt="Product"/>
                <h3>Company: {this.props.company}</h3>
                <h3>Title: {this.props.title}</h3>
                <h3>Total: $ {this.props.total}</h3>
                <h3>Count: {this.props.count}</h3>
                <p>Time: {this.props.time}</p>
                
                <hr/>
            </div>
        )
    }
}
