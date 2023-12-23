import React from "react";
import { useState } from "react";
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const Form = () =>{
    const [data,setData]=useState({name:"",email:"",phone:"",message:""});
    const handleChange = (e) => {
     const name =e.target.name;
     const value =e.target.value;
     setData({...data,[name]:value})
    }
    const handleSubmit =(e)=>{
      e.preventDefault () 
      alert(data)

    }
    return(
        <form method="post" onSubmit={handleSubmit}>
            <h1>Contact <span>Us</span></h1>
            <input type="text" name="name" id="" onChange={handleChange} value={data.name} placeholder="Enter your name"/>
            <input type="email" name="email" id=""onChange={handleChange} value={data.email} placeholder="example@gmail.com" />
            <input type="phone" name="phone" id=""onChange={handleChange}value={data.phone} placeholder="+20" />
            <textarea name="message" id="" cols="30"onChange={handleChange}value={data.message} rows="10" placeholder="Write your message"/>
            <button type="submit">send</button>
            
            
        </form>
    )
}
export default Form