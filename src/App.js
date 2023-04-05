import React from "react";
import { Route, Routes } from 'react-router-dom'

import Login from "./components/Login";
import Signup from "./components/Signup";
import Account from "./components/Account";
import { AuthContextProvider } from "./context/AuthContext";
import HistoryItemList from "./components/HistoryItemList";

function App() {
  return (
    <div>
      <h1>Auth with Firebase</h1>
      <AuthContextProvider>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/account' element={<Account />} />
        <Route path='/history' element={<HistoryItemList />} />
      </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
