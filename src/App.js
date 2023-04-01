import React from "react";
import { Route, Routes } from 'react-router-dom'

import Login from "./components/Login";
import Signup from "./components/Signup";
import Account from "./components/Account";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <div>
      <h1>Auth with Firebase</h1>
      <AuthContextProvider>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/account' element={<Account />} />
      </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
