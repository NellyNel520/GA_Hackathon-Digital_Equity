import Header from './Components/Header';
import './index.css';
import app from '../config/firebase_config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'; 
import { useState } from 'react';

const auth = getAuth(app); 


function App() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 
  
  const handleSignUp = () => {
    const onHandleSignup = async () => {
      try {
        if (email !== '' && password !== '') {
          await auth.createUserWithEmailAndPassword(email, password);
        }
      } catch (error) {
        setSignupError(error.message);
      }
    };
  
  };

  const onLogin = async () => {
    try {
        if (email !== '' && password !== '') {
            await auth.signInWithEmailAndPassword(email, password);
        }
    } catch (error) {
        setLoginError(error.message);
    }
};



  return (
    <div className="App">
      App
      <Header/>
    </div>
  );
}

export default App;
