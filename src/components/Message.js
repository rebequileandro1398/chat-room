import React from 'react'
import { Avatar } from '@mui/material'

export const Message = ({message}) => {
  return (
    <div className='conrainerMessage'>
        <div className='userMessage'>
          <Avatar src={message.photo}/>
          <h3>{message.user}</h3>
          <h4 className='messageDate'>{new Date(message.id).toLocaleString()}</h4>
        </div>
        <div className='messagetext'>
            <p>{message.userMessage}</p>
        </div>
    </div>
  )
}
