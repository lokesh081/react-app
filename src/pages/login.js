import React,{useEffect} from "react";
import './login.css';
import Home from "./Home";

function Login({ setUser ,user, isloggedin , setLoggedIn, getUserData }) {

    useEffect(() => {
        // Check if the user is already logged in
    
        const userdata = JSON.parse(localStorage.getItem('user'));
    
        if (userdata) {
          setUser(userdata.username);
          setLoggedIn(true);
        }
      }, [isloggedin , user ,  setLoggedIn , setUser]);

    if(isloggedin){

        return(
            <><Home user={user}/></>
        )

    }else{

        async function setCookie(user) {
            localStorage.setItem('user', JSON.stringify(user));
         }
       
         async function handleLogin(e) {
           e.preventDefault();
           const username = e.target.username.value;
           const password = e.target.password.value;
           const userData = await getUserData();
       
           const isValid = userData && userData.some(data => data.username === username && data.password === password);
       
           if (isValid) {
             setLoggedIn(true);
             setCookie(userData[0]); // Note: you might want to use the specific user data instead of the first element
           }
       
           console.log(isValid);
         }
       
         return (
           <div className="login-container">
             <form className="login-form" onSubmit={handleLogin}>
               <h1>Welcome Back</h1>
               <p>Please login to your account</p>
               <div className="input-group">
                 <input type="text" id="username" name="username" placeholder="Username" required />
               </div>
               <div className="input-group">
                 <input type="password" id="password" name="password" placeholder="Password" required />
               </div>
               <button type="submit">Login</button>
               <div className="bottom-text">
                 <p>Don't have an account? <a href="/signup">Sign Up</a></p>
               </div>
             </form>
           </div>
         );

    }

}

export default Login;
