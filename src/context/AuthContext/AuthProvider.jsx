import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../../firebase/firebase.init";
const googleProvider = new GoogleAuthProvider();
// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
  const [user,setUser]=useState(null);
  const [loading,setLoading]=useState(true);
 
  const createUser = (email,password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password);
  }

  const singInUser = (email,password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);
  }

  const singWithGoogle = ()=>{
    setLoading(true);
    return signInWithPopup(auth,googleProvider);
  }

  const singOutUser = ()=>{
    setLoading(true);
    return signOut(auth);
  }

  useEffect(()=>{
   const unsubscribe = onAuthStateChanged(auth,currentUser =>{
      setUser(currentUser);
      setLoading(false);
    });
    return ()=>{
      unsubscribe();
    }
  },[])

  const authInfo = {
    user,
    loading,
    createUser,
    setUser,
    singInUser,
    singOutUser,
    singWithGoogle
  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;