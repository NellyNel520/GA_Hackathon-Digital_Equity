import { Route, Routes } from 'react-router-dom'
import Header from './Components/Header';
import { SignUp } from './Components/SignupForm';
import { SignIn } from "./Components/Login";
import './index.css';




function App() {
  
  return (
    <div className="App">
      {/* <Header/> */}
      <Routes>
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
