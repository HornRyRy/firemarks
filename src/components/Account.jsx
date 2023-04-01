import React from 'react'
import { UserAuth } from '../context/AuthContext'

const Account = () => {

  const {user, logout} = UserAuth()

  return (
    <div>
        <h1>Account</h1>
        <p>User Email {user && user.email}</p>
        <button>Logout</button>
    </div>
  )
}

export default Account