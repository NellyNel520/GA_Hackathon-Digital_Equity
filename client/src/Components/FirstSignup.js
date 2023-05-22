import React, { useState } from "react";
import logo from '../assets/SignInScreen1.png'
import '../Css/SignIn.css'

export const FirstSignup = ({ onContinue }) => {
    const [role, setRole] = useState("");

    const handleRoleSelection = (selectedRole) => {
        setRole(selectedRole);
        handleContinueClick();
    };

    const handleContinueClick = () => { 
        onContinue();
    };

    return (
        <div className="flex mx-[10rem] h-[90vh] mt-10 pb-[3rem]">
    <div className="my-8">
      <img className="w-[70%]" src={logo} alt="backgroundpic" />
    </div>
    <div className="bg-[#E0FBFC] w-[50%] h-[40rem] my-5 rounded my-8 pb-10">
      <div>
        {/* <h1 className="techsavvy">TECHSAVVY</h1> */}
        <h1 className="text-center text-[3rem] mt-4"><span className='text-orange-500'>TECH</span>SAVVY</h1>

        
        {/* <h2 className="welcomeback">Welcome Back!</h2> */}
        <p className="text-center text-[2rem]">Welcome!</p>

        <form className='ml-4'>
          <input
            id='username'
            type='text'
            name="username"
            placeholder="Username"
            // onChange={(e) => setEmail(e.target.value)}
            // value={email}
            required
          />
          <input
            id='password'
            type='password'
            name="password"
            placeholder="Password"
            // onChange={(e) => setPassword(e.target.value)}
            // value={password}
            required
          />
          <input
            id='password'
            type='password'
            name="password"
            placeholder="Re-enter password"
            // onChange={(e) => setPassword(e.target.value)}
            // value={password}
            required
          />
          <div className='text-center ml-[6rem] mt-10'>
    
          </div>
          
          </form>
          <button className="create" onClick={() => handleRoleSelection("Student")} >Create an Account</button>
      </div>
    </div>
            
            
           
        </div>
    )
};