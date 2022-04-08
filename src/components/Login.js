import React from 'react'
import firebaseApp from '../firebase/credenciales'
import {getAuth, GoogleAuthProvider, signInWithRedirect} from 'firebase/auth'

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
        <button onClick={toAccess}>Acceder</button>
    </div>
  )
}
