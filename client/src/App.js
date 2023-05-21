import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar';
import { SignIn } from "./Pages/SignIn";
import './index.css';
import { Onboarding } from './Pages/Onboarding';
import Home from './Pages/Home';
import Footer from './Components/Footer';






function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signIn" element={<SignIn />} />
       <Route path="/onboarding" element={<Onboarding />} />
     
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
