import React, { useState, useEffect } from 'react';
import { GoogleAuthProvider, onAuthStateChanged, signInWithRedirect } from 'firebase/auth';
import ProfileIcon from './ProfileIcon';

const LoginBtn = ({auth}) => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });

    return () => unsubscribe();
  }, [auth]);

  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithRedirect(auth, provider);
      const user = result.user;
      console.log(user);
      setIsLoggedIn(true);
    } catch (error) {
      console.log(error);
    }
  };

  
  return (
    <div>
        {isLoggedIn ? (
        <ProfileIcon auth={auth}/>
      ) : (
        <button onClick={handleLogin} className="primary_btn btn">Connect</button>
        )}
    </div>
  );
};

export default LoginBtn;
