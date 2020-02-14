import React, { Component } from 'react';
import axios from 'axios';
import OrderDisplay from './Order'
import image from './asset/orders.png'
import {Link} from 'react-router-dom'


export default class Orders extends Component {
    state={
        finalarray:[],
        orders:[],
        emptyordersorders:true
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
            
            this.setState({orders:response.data})
            
            
            if(Object.keys(this.state.orders).length>0){
                this.setState({emptyordersorders:false})
                
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
            }
            else{
                this.setState({emptyordersorders:true})
            }
            
           
            
            
            
        }).catch(err=>{
            console.log(err);
            
        })
    }
    render(){
        let display=(<React.Fragment><h3 className='text-title text-center' style={{fontSize:'2.5rem'}}>YOUR HAVE NO ORDERS</h3><Link to='/product'>
        <img src={image} alt="empty-orders" style={{width:'21.5rem',height:'100%',marginLeft:'40%'}}/>
        </Link></React.Fragment>)
        if(!this.state.emptyordersorders){
            display=this.state.finalarray.reverse().map(ele=><OrderDisplay key={ele.img} title={ele.title}company={ele.company} count={ele.count} total={ele.total} img={ele.img} time={ele.time} />)
        }
        
        
        
        
        
        return (
            <div style={{backgroundColor:'white'}}>
           {display}
                
            
        
                
            </div>
        )
    }
}
