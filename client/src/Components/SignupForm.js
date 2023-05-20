import react, { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth"
import { handleSignUp } from "../firebase"
import  {auth}   from '../firebase';

export const SignUp = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null); 
  


  const handleSignUp = async (e) => {

    e.preventDefault();

    try {
      if (email !== '' && password !== '') {

        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const newUser = userCredential.user;
        setUser(newUser);
        console.log('User Signd up:', newUser);
      }
    } catch (error) {
      console.error(error.message);
      console.error('Sign up error:', error);
    }

  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSignUp}>
        <label>First Name:</label>
        <input
          id='firstname'
          type='text'
          name='fistname'
          placeholder="Enter First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label>Last Name:</label>
        <input
          id='lastname'
          type='text'
          name="lastname"
          placeholder="Enter Last Name"
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
          required

        />
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
        <label>Username:</label>
        <input
          id='username'
          type='text'
          name="username"
          value={username}
          placeholder="Enter Username"
          onChange={(e) => setUsername(e.target.value)}
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

        <button type="submit"> Sign Up! </button >
      </form>
    </div>
  )
}