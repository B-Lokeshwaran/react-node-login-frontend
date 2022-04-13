import React from 'react';
import './homepage.css';
import { Link } from 'react-router-dom'

const Homepage =()=>{
    return (
        <div className="homepage">
            <h1>Welcome !!!</h1>
            <Link to="/"  className="button">Logout</Link>
            {/* <div className="button">Logout</div> */}
        </div>
    )
}

 
export default Homepage