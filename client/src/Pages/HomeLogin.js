import React, { useContext } from 'react';
import { auth } from '../firebase';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import '../Css/SignIn.css';
import { useState } from 'react';
import logo1 from '../assets/11.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Onboarding } from './Onboarding';
import { UserInfo } from '../Components/UserInfo';
import { AuthContext } from '../AuthContext';

const HomeLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState();
  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault()
    setFormState((prevState) => {
  return { ...prevState, [e.target.name]: e.target.value };
     });
  };

  const [formState, setFormState] = useState({ email: "", password: ""});

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

        <form className='ml-4'>
          <input
            id='username'
            type='text'
            name="email"
            placeholder="Email"
            onChange={(e) => handleChange(e)}
            value={formState.email}
            required
          />
          <input
            id='password'
            type='password'
            name="password"
            placeholder="Password"
            onChange={(e) => handleChange(e)}
            value={formState.password}
            required
          />

          <button className="signInBtn bg-[#3D5A80] mb-2" onClick={signInWithEmailAndPassword}>Log In</button>
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
