import "tailwindcss/tailwind.css";
import Header from './Components/Header';
import { SignUp } from './Components/SignupForm';
import { SignIn } from "./Components/Login";
import './index.css';




function App() {
  
  return (
    <div className="App">
      App
      <Header/>
      <SignUp/>
      <SignIn />
    </div>
  );
}

export default App;
