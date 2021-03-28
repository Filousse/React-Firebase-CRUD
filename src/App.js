import React, { useState, useEffect } from 'react';
import firebase from './utils/firebaseConfig';
import Main from './components/Main';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { UidContext } from "./components/UidContext";


const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [uid, setUid] = useState(null)

  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false,
    },
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setIsSignedIn(!!user);
      setUid(user.uid)
      // console.log(user);
    });
  }, []);

  return (
    <UidContext.Provider value={uid}>
        <div className="app" style={{textAlign: 'center'}}>
          {isSignedIn ? (
            <Main />
          ) : (
            <div className="login-page">
              <h1>React Crud Firebase</h1>
              <StyledFirebaseAuth 
                uiConfig={uiConfig}
                firebaseAuth={firebase.auth()}
              />
            </div>
          )}
        </div>
    </UidContext.Provider>
  );
};

export default App;