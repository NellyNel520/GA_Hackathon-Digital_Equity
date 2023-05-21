import {auth} from '../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';
import '../Css/SignIn.css'
import image from '../assets/11.png'

export const SignIn=()=>{

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleLogin = async () => {
    try {
        if (email !== '' && password !== '') {
            await signInWithEmailAndPassword(auth, email, password);
        }
    } catch (error) {
        console.log(error.message);
    }
  };

    return(
        <div className='signin'>
        <img src={image} alt='backgroundpic'/>
            <div className='box'>
              <div className='two'>
            <h1 className='techsavvy'>TECHSAVVY</h1>
            <h2 className='welcomeback'>Welcome Back!</h2>
           
        <form
        onSubmit={handleLogin} >
            <input
              id='username'
              type='text'
              name="username"
              placeholder="Username"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
            <input
              id='password'
              type='password'
              name="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
            
            </form>
            <button>Log In</button>
            <h1 className='forgot'>Forgot username/password?</h1>
            <h1 className='signup'>Don't have an account? Sign up.</h1>
        </div>
        </div>
        </div>
    )
}