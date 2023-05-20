import { Route, Routes } from 'react-router-dom'
import Header from './Components/Header';
import { SignUp } from './Components/SignupForm';
import { SignIn } from "./Components/SignIn";
import './index.css';
import { FirstSignup } from './Components/FirstSignup';
import { Accomodations } from './Components/Accomodations';




function App() {
  
  return (
    <div className="App">
      {/* <Header/> */}
      <Routes>
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/iam" element={<FirstSignup/>}/>
        <Route path="/accommodations" element={<Accomodations/>}/>
      </Routes>
    </div>
  );
}

export default App;
