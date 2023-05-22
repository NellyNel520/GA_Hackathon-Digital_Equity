import React, { useContext, useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar';
import { AuthContext } from './AuthContext';
import './index.css';
import { Onboarding } from './Pages/Onboarding';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import SignIn2 from './Pages/SignIn2';
import SignUp from './Pages/SignUp';
import { auth, db, app } from './firebase'; 



function App() {

  const { user } = useContext(AuthContext) || {};

 

  return (
    <div className="App">
      <Navbar />
      <Routes
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn2 />} />
        <Route path='/onboarding' element={<Onboarding />} />
        <Route path="/signUp" element={<SignUp />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
