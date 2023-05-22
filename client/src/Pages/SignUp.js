import React, { useState } from 'react'
import '../Css/SignIn.css'
import logo2 from '../assets/SignInScreen1.png'
import { auth } from '../firebase'
import { createUserWithEmailAndPassword } from '@firebase/auth'


const SignUp = ({onContinue}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState();

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
    <div className="flex mx-[10rem] h-[90vh] mt-10 pb-[3rem]">
      <div className="my-8">
        <img className="w-[70%]" src={logo2} alt="backgroundpic" />
      </div>
      <div className="bg-[#E0FBFC] w-[50%] h-[40rem] my-5 rounded my-8 pb-10">
        <div>
          {/* <h1 className="techsavvy">TECHSAVVY</h1> */}
          <h1 className="text-center text-[3rem] mt-4"><span className='text-orange-500'>TECH</span>SAVVY</h1>


          {/* <h2 className="welcomeback">Welcome Back!</h2> */}
          <p className="text-center text-[2rem]">Welcome!</p>

          <form className='ml-4' onSubmit={handleSignUp}>
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
            <input
              id='password'
              type='password'
              name="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
            <button className="signInBtn bg-[#3D5A80] mb-2"
             onClick={onContinue}
            >
              Continue</button>
            <div className='text-center ml-[6rem] mt-10'>
              <h1 className='text-orange-500'>Forgot username/password?</h1>
              <h1 className=''>Don't have an account? <span className='text-orange-500'>Sign up.</span></h1>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp