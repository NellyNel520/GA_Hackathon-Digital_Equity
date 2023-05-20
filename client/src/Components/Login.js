import react, { useState } from 'react';
import {auth} from '../firebase';

import { signInWithEmailAndPassword } from "firebase/auth";


export const SignIn = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const handleLogin = async () => {
  //   try {
  //       if (email !== '' && password !== '') {
  //           await signInWithEmailAndPassword(auth, email, password);
  //       }
  //   } catch (error) {
  //       console.log(error.message);
  //   }
  // };
  

  return (
    <div>
      <h1>Sign In</h1>
      <form 
      // onSubmit={handleLogin}
      >
        <label>Email:</label>
        <input
          id='email'
          type='text'
          name="email"
          value={email}
          placeholder="Input Your Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Password</label>
        <input
          id='password'
          type='password'
          name="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  )
};

