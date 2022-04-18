import React,{useState} from 'react';
import './register.css';
import axios from 'axios';
import { Link } from 'react-router-dom'
import {useNavigate} from "react-router-dom";
const Register =()=>{


    const navigate = useNavigate();
    const [ user,setUser ] = useState({
        name: "",
        email: "",
        password: "",
        reEnterPassword: "",
    })


    const handleChange = e => {
        
        const {name,value}=e.target
        // console.log(name,value)
        setUser({
            ...user,
            [name]: value   
        })


    } 
   

    // const register =() =>{
    //     const { name,email,password,reEnterPassword} = user
    //     if( name && email && password && (password === reEnterPassword)){
            
    //         axios.post("https://loginandregisterbackend.herokuapp.com/register" ,user)
    //         .then( res => console.log(res))
    //         alert("you registered successfully")
    //     }
     
    //     else{
    //         alert("Not registered")
    //     }
    // }

    const register1 =() =>{

const{name,email,password,reEnterPassword} = user
        const data= axios.post("https://loginandregisterbackend.herokuapp.com/register" ,user)
        .then(res=>{
            console.log(res.data.message)

        //    if(email===user.email && name===user.name){
        //        alert("User already registered")
        //    } 
        //    else if(password !== reEnterPassword){
        //        alert("Paswword mismatches")
        //    }
            
             if(name&& email && password && (password === reEnterPassword)){

            
            alert("You Successfully Registered")
            navigate("/")
            }
            else{
                alert("Not Registered")
            }

            
            
        })
    }



    return (
        <div className="register">
            {console.log(user)}
            <h1>Register</h1>
            <input type="text" name="name" value={user.name} placeholder="Enter the Name" onChange={ handleChange}></input>
            <input type="text" name="email" value={user.email} placeholder="Enter the Email" onChange={ handleChange}></input>
            <input type="password" name="password" value={user.password} placeholder="Enter the password" onChange={ handleChange}></input>
            <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter the password" onChange={ handleChange}></input>
            <div className="button" onClick={register1}>Register</div>
            <div>If you already have an account, Login here</div>
            <Link to="/"  className="btn">Login</Link>
            {/* <div className="button" onClick={Link} to="/">Login</div> */}
        </div>
    )
}


export default Register
