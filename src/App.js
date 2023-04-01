import React from "react";
import { Route, Routes } from 'react-router-dom'

import Login from "./components/Login";
import Signup from "./components/Signup";
import Account from "./components/Account";

function App() {
  return (
    <div>
      <h1>Auth with Firebase</h1>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/account' element={<Account />} />
      </Routes>
    </div>
  );
}

export default App;
