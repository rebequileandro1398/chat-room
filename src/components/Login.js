import React from 'react'
import firebaseApp from '../firebase/credenciales'
import {getAuth, GoogleAuthProvider, signInWithRedirect} from 'firebase/auth'
import { Button } from '@material-ui/core'

const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();


export const Login = () => {
  const toAccess = () => {
    signInWithRedirect(auth, provider)
  }
  return (
    <div>
        <div>
          <h1>Logearse con google</h1>
        </div>
        <Button onClick={toAccess}>Acceder</Button>
    </div>
  )
}
