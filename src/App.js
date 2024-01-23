import './App.css';
import Home from './pages/Home.js';
import Login  from './pages/login';
import 'bootstrap/dist/css/bootstrap.css';
import { Route, Routes } from 'react-router-dom';
import Signup from './pages/signup.js';
import { useState , useEffect} from 'react';


function App() {

  //const [isSignedUp , setSignUp] = useState(false);
  const [isloggedin , setLoggedIn] = useState(false);
  const [user , setUser] = useState('welcome');


  useEffect(() => {
    // Check if the user is already logged in

    const userdata = JSON.parse(localStorage.getItem('user'));

    if (userdata) {
      setUser(userdata.username);
      setLoggedIn(true);
    }
  }, [isloggedin , user]);


  const getUserData = async() => {

     const data = await JSON.parse(localStorage.getItem('user_data'));

    if(data){

      return data;

    }else{
      console.log("no user data");
      return null;
    }
  }

  return(

    <div className="App container-md " >
        <Routes>
          <Route path='/' element={isloggedin ? <Home user = {user} setLoggedIn = {setLoggedIn}/> : <Login setUser={setUser} user = {user} setLoggedIn = {setLoggedIn} getUserData = {getUserData} /> } />
          <Route path='/signup' element={ <Signup getUserData = {getUserData}/> } />
          <Route path='/login' element={<Login setUser={setUser} user = {user} isloggedin = {isloggedin} setLoggedIn = {setLoggedIn} getUserData = {getUserData} /> } />
        </Routes>
    </div>
  )     
  
}

export default App;
