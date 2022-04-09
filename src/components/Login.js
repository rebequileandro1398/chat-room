import React from 'react'
import firebaseApp from '../firebase/credenciales'
import {getAuth, GoogleAuthProvider, signInWithRedirect} from 'firebase/auth'
import LoginIcon from '@mui/icons-material/Login';
import Tooltip from '@mui/material/Tooltip';

const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();


export const Login = () => {
  const toAccess = () => {
    signInWithRedirect(auth, provider)
  }
  return (
    <div className='loginContainer'>
      <div className='logincard'>
        <Tooltip title='Acceder con Google'>
          <LoginIcon fontSize="large" className='Loginicon' onClick={toAccess}/>
        </Tooltip>
      </div>
    </div>
  )
}
