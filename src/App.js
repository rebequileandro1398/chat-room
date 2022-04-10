import React, { useState } from "react";
import { Sidebar } from './components/Sidebar';
import { Chat } from './components/Chat'
import { Login } from './components/Login'

function App() {
  const [user, setUser] = useState(null)
  const [currentChanel, setCurrentChanel] = useState(null)
  const [userColor, setUserColor] = useState(generateRandomColor())
  
  function generateRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  return (
    <div className="app">
      {
        user 
        ? 
        <div className="container">
          <Sidebar 
            user={user} 
            setUser={setUser}
            setCurrentChanel={setCurrentChanel}
            setUserColor={setUserColor}
            userColor={userColor}
          />

          <Chat 
            user={user}
            currentChanel={currentChanel}
            userColor={userColor}
          />
        </div>
        :
        <Login 
          setUser={setUser}
          />
      }
    </div>
  );
}

export default App;
