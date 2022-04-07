import React, { useState } from "react";
import { Sidebar } from './components/Sidebar';
import { Chat } from './components/Chat'
import { Login } from './components/Login'

import firebaseApp from "./firebase/credenciales";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth(firebaseApp); 

function App() {
  const [user, setUser] = useState(null)
  onAuthStateChanged(auth, (user) => {
    user ? setUser(user) : setUser(null)
  })

  return (
    <div>
      {
        user 
        ? 
        <div>
          <Sidebar user={user}/>
          <Chat/>
        </div>
        :
        <Login/>
      }
    </div>
  );
}

export default App;
