import React, { useState, useEffect } from 'react';


import fire from './fire';
import Login from './Login';
import Home from './Home';
const App = () => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [emailerror, setEmailerror] = useState('');
  const [passerror, setPasserror] = useState('');
  const [hasaccount, setHasAccount] = useState(false);
  const clearInput = () => {
    setEmail('');
    setPass('');
  }
  const clearError = () => {
    setEmailerror('');
    setPasserror('');
  }
  const handleLogin = () => {
    clearError();
    fire
      .auth()
      .signInWithEmailAndPassword(email, pass)
      .catch(err => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailerror(err.message);
            break;
          case "auth/wrong-password":
            setPasserror(err.message);
            break;


          default:
            break;
        }
      });
  };
  const handleSignup = () => {
    clearError();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, pass)
      .catch(err => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailerror(err.message);
            break;
          case "auth/weak-password":
            setPasserror(err.message);
            break;


          default:
            break;
        }
      });
  };
  const handleLogout = () => {
    fire.auth().signOut();
  };
  const authListiner = () => {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        clearInput();
        setUser(user);
      }
      else {
        setUser("");
      }
    });
  };
  useEffect(() => {
    authListiner();
  }, []);




  return (
    <>
    {user ? (
      <Home handleLogout={handleLogout} />
    ):(
      <Login email={email} setEmail={setEmail} pass={pass} setPass={setPass} handleLogin={handleLogin} 
      handleSignup={handleSignup} hasaccount={hasaccount} setHasAccount={setHasAccount} 
      emailerror={emailerror} passerror={passerror}/>
    )}
      
      
    </>
  );
}

export default App;
