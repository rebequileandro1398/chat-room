import React from 'react'
import { Avatar } from '@mui/material'

export const Message = ({message}) => {
  console.log(message)
  return (
    <div className='conrainerMessage'>
        <div className='userMessage'>
          <h3 style={{color: message.color, fontSize: 'large'}}>{message.user}</h3>
          <h4 className='messageDate'>{new Date(message.id).toLocaleString()}</h4>
        </div>
        <div className='messagetext'>
            <p>{message.userMessage}</p>
        </div>
    </div>
  )
}
