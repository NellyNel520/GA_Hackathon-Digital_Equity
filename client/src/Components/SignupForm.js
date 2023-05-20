
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
          <h1>General Information</h1>
          <form >
              <label>Full Name</label>
          <input
              id='fullname'
              type='text'
              name='fullname'
              placeholder="Full Name"
            />
            <label>Your Level of Education</label>
          <input
              id='education'
              type='text'
              name="education"
              placeholder="Level of Education"
              required
            />
            <label>State</label>
             <input
              id='state'
              type='text'
              name="state"
              placeholder="State"
              required
            />
            <label>Zip Code</label>
            <input
              id='zipcode'
              type='text'
              name="zipcode"
              placeholder="Zipcode"
              required
            />
           <label>Password</label>
           <input
              id='password'
              type='text'
              name="password"
              placeholder="password"
              required
            />

        <label>Password</label>
          <input
              id='password'
              type='password'
              name="password"
              placeholder="password"
              required
            />
            <label>Confirm Password</label>
             <input
              id='conpassword'
              type='password'
              name="conpassword"
              placeholder="conpassword"
              required
            />
          </form>
        </div>
      )
  };
