import React, { useState, useEffect, useRef } from 'react'
import { Send } from '@material-ui/icons'
import firebaseApp from '../firebase/credenciales'
import {getFirestore, doc, setDoc} from 'firebase/firestore'

const db = getFirestore(firebaseApp)

export const Chat = ({currentChanel, user}) => {
  const [message, setMessage] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault();
    const docRef = doc(db, `chanels/${currentChanel}/message/${ new Date().getTime()}`);
    setDoc(docRef, {
      id: new Date().getTime(),
      photo: user.photoURL,
      user: user.displayName,
      userMessage: message
    })
    setMessage('')
  }
  return (
    <div>
      <div>
        <h3>{currentChanel}</h3>
      </div>
      <div> mensajes </div>
      <div>
        <form onSubmit={(e)=> handleSubmit(e)}>
          <input 
            type='text' 
            value={message}
            disabled={ currentChanel ? false : true}
            placeholder='Enviar Mensaje...' 
            onChange={(e) => setMessage(e.target.value)}/>
          <button 
            disabled={ currentChanel ? false : true}
            type='submit'><Send/></button>
        </form>
      </div>
    </div>
  )
}
