import React, { useState } from 'react'
import firebaseApp from '../firebase/credenciales'
import {getAuth, GoogleAuthProvider, signInWithRedirect} from 'firebase/auth'
import LoginIcon from '@mui/icons-material/Login';
import Tooltip from '@mui/material/Tooltip';

export const Login = ({setUser}) => {
  const [input, setInput] = useState('')

  const toAccess = (e) => {
    e.preventDefault();
    setUser({
      name: input
    })
  }

  return (
    <div className='loginContainer'>
      <div className='logincard'>
        <form className='loginForm' onSubmit={()=> toAccess()}>
          <input 
            className='LoginInput' 
            type='text' 
            value={input} 
            placeholder='Tu Nickname...'
            onChange={(e) => setInput(e.target.value)}
            />
          <Tooltip title='Acceder'>
            <button
              disabled={input.length > 3 ? false : true}
              className='loginButton'
              type='submit'
              onClick={toAccess}
            >
            <LoginIcon 
              fontSize="large" 
              className='Loginicon' 
              />
            </button>
          </Tooltip>
        </form>
      </div>
    </div>
  )     
}
