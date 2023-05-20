import {auth} from '../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';



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
        <div className="border-2 border-cyan-800 border-radius:0.25rem">
            <h1>Company</h1>
            <h2>Welcome</h2>
            <h3>Sign in to Company</h3>
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
            <h1>Forgot Password?</h1>
            <h1>Don't have an account? Sign up.</h1>
        </div>
    )
}