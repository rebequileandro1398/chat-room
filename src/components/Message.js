import React from 'react'
import { Avatar } from '@mui/material'

export const Message = ({message}) => {
  return (
    <div>
        <Avatar src={message.photo}/>
        <div>
            <h3>{message.user}</h3>
            <h4>{new Date(message.id).toLocaleString()}</h4>
            <p>{message.userMessage}</p>
        </div>
    </div>
  )
}
