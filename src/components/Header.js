import React from "react";
import "./Header.css";

function Header({user,setLoggedIn}){

    return(
        <div className="header d-flex justify-content-between">
            <p>Hi {user}</p>
            <button onClick={() => {
                
                setLoggedIn(false);
                localStorage.removeItem('user');
                
                }}>Logout</button>
        </div>
    )
}

export default Header;