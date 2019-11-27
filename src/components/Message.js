import React from 'react'
import './Message.css'

const Message = ({message}) => (
  message
    ? <span className='message'>{message}</span>
    : null
)

export default Message
