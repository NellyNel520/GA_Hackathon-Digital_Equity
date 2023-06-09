import React, { useContext } from 'react';
import { auth }  from '../firebase';
import {  signInWithEmailAndPassword } from 'firebase/auth';
import '../Css/SignIn.css';
import { useState } from 'react';
import logo1 from '../assets/11.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Onboarding } from './Onboarding';
import { UserInfo } from '../Components/UserInfo';
import { AuthContext } from '../AuthContext';

const HomeLogin = () => {
 const { user } = useContext(AuthContext) || {}; 
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      if (email !== '' && password !== '') {
        await signInWithEmailAndPassword(auth, email, password);
        console.log(user);
        navigate('/');
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="flex mx-[10rem] h-[90vh] mt-10 pb-[3rem]">
      <div className="my-8">
        <img className="w-[70%]" src={logo1} alt="backgroundpic" />
      </div>
      <div className="bg-[#E0FBFC] w-[50%] h-[40rem] my-5 rounded my-8 pb-10">
        <div>
          {/* <h1 className="techsavvy">TECHSAVVY</h1> */}
          <h1 className="text-center text-[3rem] mt-4"><span className='text-orange-500'>TECH</span>SAVVY</h1>


          {/* <h2 className="welcomeback">Welcome Back!</h2> */}
          <p className="text-center text-[2rem]">Welcome Back!</p>

          <form className='ml-4' onSubmit={handleLogin}>
            <input
              id='username'
              type='text'
              name="email"
              placeholder="Email"
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

            <button className="signInBtn bg-[#3D5A80] mb-2" >Log In</button>
            <div className='text-center ml-[6rem] mt-10'>
              <h1 className='text-orange-500'>Forgot username/password?</h1>
              <h1 className=''>Don't have an account?<Link to="/onboarding"> <span className='text-orange-500'>Sign up.</span></Link></h1>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default HomeLogin
