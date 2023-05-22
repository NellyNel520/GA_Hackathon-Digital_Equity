import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar';

import './index.css';
import { Onboarding } from './Pages/Onboarding';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import SignIn2 from './Pages/SignIn2';
import SignUp from './Pages/SignUp';






function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signIn" element={<SignIn2 />} />
        <Route path="/signUp" element={<SignUp />} />
       <Route path="/onboarding" element={<Onboarding />} />
     
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
