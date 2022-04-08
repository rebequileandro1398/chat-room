import React, { useState, useEffect, useRef } from 'react'
import { Send } from '@material-ui/icons'
import firebaseApp from '../firebase/credenciales'
import {getFirestore, doc, setDoc, collection, getDocs, onSnapshot} from 'firebase/firestore'
import { Message } from './Message'

const db = getFirestore(firebaseApp)

export const Chat = ({currentChanel, user}) => {

  useEffect(()=> onSnapshot(collection(db, `chanels/${currentChanel}/message`), (snapshot)=> 
      setChat(snapshot.docs.map(e => e.data()))
    ), [currentChanel])
  
  const [message, setMessage] = useState('')
  const [chat, setChat] = useState([])


  const handleSubmit = (e) => {
    e.preventDefault();
    const docRef = doc(db, `chanels/${currentChanel}/message/${ new Date().getTime()}`);
    setDoc(docRef, {
      id: new Date().getTime(),
      photo: user.photoURL,
      user: user.displayName,
      userMessage: message,
    })
    setMessage('')
  }



  return (
    <div>
      <div>
        <h3>{currentChanel}</h3>
      </div>
      <div>
        { 
        chat ? chat.map(e => <Message key={e.id} message={e}/>)
        :
        <h1>loading...</h1>
        }
      </div>
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
