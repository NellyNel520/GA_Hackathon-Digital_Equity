import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar';
import { SignIn } from "./Components/SignIn";
import './index.css';
import { Onboarding } from './Pages/Onboarding';
import Home from './Pages/Home';




function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signIn" element={<SignIn />} />
       <Route path="/onboarding" element={<Onboarding />} />
      </Routes>
    </div>
  );
}

export default App;
