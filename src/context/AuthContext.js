import { createContext, useContext } from "react";
import { useState, useEffect } from 'react'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from '../firebase'

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const login = () =>{

    }

    const logout = () =>{
      return signOut(auth)
    }


  return (

  <UserContext.Provider value={{createUser, user, logout, login}}>
    {children}
    </UserContext.Provider>
  )
};

export const UserAuth = () => {
  return useContext(UserContext);
};
