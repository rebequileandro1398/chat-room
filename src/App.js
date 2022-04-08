import React, { useState } from "react";
import { Sidebar } from './components/Sidebar';
import { Chat } from './components/Chat'
import { Login } from './components/Login'

import firebaseApp from "./firebase/credenciales";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth(firebaseApp); 

function App() {
  const [user, setUser] = useState(null)
  const [currentChanel, setCurrentChanel] = useState(null)
  onAuthStateChanged(auth, (user) => {
    user ? setUser(user) : setUser(null)
  })

  return (
    <div>
      {
        user 
        ? 
        <div>
          <Sidebar 
            user={user} 
            setCurrentChanel={setCurrentChanel}
          />

          <Chat 
            user={user}
            currentChanel={currentChanel}
          />
        </div>
        :
        <Login/>
      }
    </div>
  );
}

export default App;
