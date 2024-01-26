import React from "react";
import "./Header.css";

function Header({setUrl,user,setLoggedIn,setShows}){

    function handleSubmit(e){
        e.preventDefault();
        console.log(e.target.search.value);
        setUrl(e.target.search.value);
    }

    return(
        <div className="header d-flex justify-content-between">

            <div className="header-elements">
                    <p>Welcome {user}</p>
            </div>
            
            <div className="header-elements">
                    <form role="search" method="get" className="search-form form" onSubmit={handleSubmit}>
                        <label>
                            <span className="screen-reader-text">Search for...</span>
                            <input type="search" className="search-field" placeholder="Search Movies" name="search" title="" />
                        </label>
                        <input type="submit" className="search-submit button" value="🔍" />
                    </form>
            </div>

            <div className="header-elements">
                <button className="" style={{background : "transparent"}} onClick={() => {
                
                setLoggedIn(false);
                localStorage.removeItem('user');
                
                }}>Logout</button>
            </div>
        </div>
    )
}

export default Header;