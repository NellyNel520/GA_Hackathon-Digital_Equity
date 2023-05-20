import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar';
import { SignUp } from './Components/SignupForm';
import { SignIn } from "./Components/SignIn";
import './index.css';
import { FirstSignup } from './Components/FirstSignup';
import { Accomodations } from './Components/Accomodations';
// import Home from './Pages/Home';




function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      {/* <Route path="/" element={<Home />} /> */}
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/iam" element={<FirstSignup/>}/>
        <Route path="/accommodations" element={<Accomodations/>}/>
      </Routes>
    </div>
  );
}

export default App;
