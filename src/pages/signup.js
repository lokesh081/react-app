import React from "react";
import { useNavigate } from "react-router-dom";
import './signup.css';

function Signup({getUserData}){

    const navigate = useNavigate();

    const handlesubmit = async(e) => {
        let data = [];
        e.preventDefault();
        const userdata = await getUserData();

        if(userdata != null){
            data = [
                ...userdata,
                {
                    username : e.target.username.value,
                    email : e.target.email.value,
                    password : e.target.password.value
                 }
            ]
        }else{
            data = [
                {
                    username : e.target.username.value,
                    email : e.target.email.value,
                    password : e.target.password.value
                 }
                ]
        }
        console.log(data);
        localStorage.setItem('user_data', JSON.stringify(data));
        navigate('/');

    }
    
    return(
        <>

            <div className="login-container " style={{margin : "10% auto auto auto"}}>
            <form className="login-form" onSubmit={(e) => { handlesubmit(e)}} >
                <h1 className="mb-4">Sign Up</h1>
                <div className="input-group">
                    <input  type="text" id="username" name="username" placeholder="Username" required></input>
                </div>  

                <div className="input-group">
                    <input type="text" id="email" name="email" placeholder="Email" required></input>
                </div>

                <div className="input-group">
                    <input type="password" id="password" name="password" placeholder="Password" required></input>
                </div>

                <div className="input-group">
                    <input type="password-check" id="password-check" name="password-check" placeholder="Reenter Password" required></input>
                </div>

                <button type="submit">Sign Up</button>
                <div className="bottom-text">
                <p>Already have an acoount? <a href="/login">Login</a></p>
                </div>
            </form>
            </div>
        </>
    )
}

export default Signup;