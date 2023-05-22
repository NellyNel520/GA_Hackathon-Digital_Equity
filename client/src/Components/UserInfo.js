
import react, { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth"
import { handleSignUp } from "../firebase"
import  {auth}   from '../firebase';
import '../Css/UserInfo.css'


export const UserInfo = () => {

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
        console.log('User Signed up:', newUser);
      }
    } catch (error) {
      console.error(error.message);
      console.error('Sign up error:', error);
    }

  };


    return (
      <div className='container'>
        <div className='userinfo'>
          <h1 className='geninfo'>General Information</h1>
          <form className='form'>
              <label className='lfull'>Full Name</label>
          <input
              id='fullname'
              type='text'
              name='fullname'
              placeholder="Full Name"
            />
            <label className='ledu'>Your Level of Education</label>
          <input
              id='education'
              type='text'
              name="education"
              placeholder="Level of Education"
              required
            />
            <label className='lstate'>State</label>
             <input
              id='state'
              type='text'
              name="state"
              placeholder="State"
              required
            />
            <label className='lzip'>Zip Code</label>
            <input
              id='zipcode'
              type='text'
              name="zipcode"
              placeholder="Zipcode"
              required
            />
            <label className='lemail'>Email</label>
            <input
              id='email'
              type='text'
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
           <label className='lpass'>Password</label>
           <input
              id='password'
              type='password'
              name="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <label className='conpass'>Confirm Password</label>
             <input
              id='conpassword'
              type='password'
              name="conpassword"
              placeholder="conpassword"
              required
            />
            <button>Submit</button>
          </form>
        </div>
        </div>
      )
  };

