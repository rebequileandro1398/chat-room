import React, { useState, useEffect, useRef } from 'react'
import SendIcon from '@mui/icons-material/Send';
import firebaseApp from '../firebase/credenciales'
import {getFirestore, doc, setDoc, collection, onSnapshot} from 'firebase/firestore'
import { Message } from './Message'
import LinearProgress from '@mui/material/LinearProgress'
import Picker from 'emoji-picker-react';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';

const db = getFirestore(firebaseApp)

export const Chat = ({currentChanel, user, userColor}) => {

  useEffect(()=> onSnapshot(collection(db, `chanels/${currentChanel}/message`), (snapshot)=> 
      setChat(snapshot.docs.map(e => e.data()))
    ), [currentChanel])
  
  const [message, setMessage] = useState('')
  const [chat, setChat] = useState([])
  const [showEmoji, setShowEmoji] = useState(false)
  const anchor = useRef()

  
  const onEmojiClick = (event, emojiObject) => {
    setMessage(message.concat(emojiObject.emoji))
    setShowEmoji(false)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const docRef = doc(db, `chanels/${currentChanel}/message/${ new Date().getTime()}`);
    setDoc(docRef, {
      id: new Date().getTime(),
      user: user.name,
      userMessage: message,
      color: userColor
    })
    setMessage('')
    anchor.current.scrollIntoView({behavior: 'smooth'})
  }


  return (
    <div className='containerChat'>
      <div className='currentChanel'>
        <h3>{currentChanel}</h3>
      </div>
      <div className='messageChat'>
        { showEmoji && 
          <div className='emojiPicker'>
            <Picker
              onEmojiClick={onEmojiClick}/>
          </div>
        }
        <div className='containerMessage'>
          { 
          currentChanel ?
          chat ? chat.map(e => <Message key={e.id} message={e}/>)
          :
          <LinearProgress/>
          :
          <h1 style={{color: '#fff', fontSize: 'large'}}>Selecciona una sala...</h1>
          }
          <div ref={anchor} style={{marginBottom: '100px'}}></div>
        </div>
      </div>
      <div className='containerInputChat'>
        <form className='Chatform' onSubmit={(e)=> handleSubmit(e)}>
          <input
            className='inputChat' 
            type='text' 
            value={message}
            disabled={ currentChanel ? false : true}
            placeholder='Enviar Mensaje...' 
            onChange={(e) => setMessage(e.target.value)}/>

          <SentimentSatisfiedAltIcon 
            className='emojibutton'
            onClick={() => setShowEmoji(!showEmoji)}
            />
      
            
          <button 
            className='buttonSend'
            type='submit'
            disabled={ message ? false : true}
            onClick={(e)=> handleSubmit(e)}
            >
            <SendIcon 
              className='Sendicon'
              />
          </button>
        </form>
      </div>
    </div>
  )
}
