import React,{useState} from 'react';
import './login.css';
import axios from "axios";
 import {useNavigate} from "react-router-dom";
import { Link } from 'react-router-dom'
const Login =()=>{

    const navigate = useNavigate();

    const [ user,setUser ] = useState({
        
        email: "",
        password: "",
        
    })


    const handleChange = e => {
        
        const {name,value}=e.target
        // console.log(name,value)
        setUser({
            ...user,
            [name]: value   
        })


    }

    const login1 =() =>{
       const data= axios.post("https://loginandregisterbackend.herokuapp.com" ,user)
        .then(res =>{


            console.log(res.data.message) 
            if(res.data.message==="Login Successfully"){
                alert(res.data.message)
                navigate("/homepage")
            }else{
                alert(res.data.message)
            }
            
            // alert(res.data.message)
            
         } )

        // console.log(data)
        // navigate("/homepage")
    }

    return (
        <div className="login">
            {console.log(user)}
            <h1>Login</h1>
            <input type="text" name="email" value={user.email} onChange={ handleChange} placeholder="Enter the Email"></input>
            <input type="password" name="password" value={user.password}  onChange={ handleChange} placeholder="Enter the password"></input>
            <div className="button" onClick={login1}>Login</div>
            <div>If you not have a account, Register here</div>
           
            <Link to="/register"  className="btn">Register</Link>
            {/* <div className="button" onClick={(()=>{history.push("/")})} >Register</div>  */}
        </div>
    )
}


export default Login