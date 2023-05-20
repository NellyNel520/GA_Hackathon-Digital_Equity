// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

///////// LOGIN AND SIGNUP FUNCTIONS /////////////////
const handleSignUp = () => {
  const onHandleSignup = async () => {
    try {
      if (email !== '' && password !== '') {
        await createUserWithEmailAndPassword(email, password);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

};

const handleLogin = async () => {
  try {
      if (email !== '' && password !== '') {
          await signInWithEmailAndPassword(email, password);
      }
  } catch (error) {
      console.log(error.message);
  }
};



export default app; 