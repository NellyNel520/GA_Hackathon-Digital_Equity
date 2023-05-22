import React, { useContext, useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import { AuthContext } from './AuthContext';
import './index.css';
import { Onboarding } from './Pages/Onboarding';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import HomeLogin from './Pages/HomeLogin';
import { auth, db, app } from './firebase'; 



function App() {

  const { user } = useContext(AuthContext) || {};



  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" user={user} element={<Home />} />
        <Route path="/signin" user={user} element={<HomeLogin />} />
        <Route path='/onboarding' user={user} element={<Onboarding />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
