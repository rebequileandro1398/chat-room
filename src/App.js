import React, { useState } from "react";
import firebaseApp from "./firebase/credenciales";

// Conforme se necesite, importar los demás servicios y funciones. Por ejemplo:

/* import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth(firebaseApp); */

function App() {
  const [user, setUser] = useState()
  return (
    <div>
      {
        user ? 
        <div>
          
        </div>
        :
        <p></p>
      }
    </div>
  );
}

export default App;
