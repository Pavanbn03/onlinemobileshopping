import React, { Component } from 'react';
import axios from 'axios';
import OrderDisplay from './Order'
const merge = require('deepmerge')

export default class Orders extends Component {
    state={
        finalarray:[]
    }
    componentDidMount(){
        this.getdata()
    }
   
    getdata=()=>{
        const token= localStorage.getItem('token');
        const userId=localStorage.getItem('userId');
        
        const queryParams='?auth='+token+'&orderBy="userId"&equalTo="'+userId+'"';
        axios.get('https://online-mobile-shopping-c693f.firebaseio.com/orders.json'+queryParams)
        .then(response=>{
            console.log(response);
            const fetchorders=[];
            for(let key in response.data){
                console.log("res",response.data[key]);
                
                fetchorders.push({
                    ...response.data[key],
                    
                    id:key
                });
            }
            console.log("fetch",fetchorders);
            
            let mergedarray=Object.keys(fetchorders).map((arr)=>{
                return fetchorders[arr]
                
            })
            console.log("mergelingth",mergedarray.length);
            mergedarray=Object.keys(mergedarray).map(arr=>{
                 return mergedarray[arr]
                 
            })
            console.log("mergelingth",mergedarray);
            
            let pusharray=[]
            for(let i=0;i<mergedarray.length;i++){
                for(let j=0;j<=mergedarray.length;j++){
                      pusharray.push(fetchorders[i][j])  
                    
                }
            }
           pusharray=pusharray.filter(ele=>ele!==undefined)
           console.log("push",pusharray);
           this.setState({finalarray:pusharray})
           
            
            
            
        }).catch(err=>{
            console.log(err);
            
        })
    }
    render(){
        
        
        
        
        return (
            <div>
            {this.state.finalarray.map(ele=><OrderDisplay key={ele.img} title={ele.title}company={ele.company} count={ele.count} total={ele.total} img={ele.img} time={ele.time} />)}
                
            
        
                
            </div>
        )
    }
}
