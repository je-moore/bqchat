import React from 'react'

function MessageItem({ message, timeAgo, username, isThisUser, userColor }) {
  const itemColor = 'hsl(' + ((userColor[0] * 2) % 360) + ', 50%, 50%)'

  const messageItem = {
    padding: '0.4rem 0',
    margin: '0 0 1rem',
    fontFamily: 'Fredoka One',
  }

  const messageText = {
    fontSize: '150%',
    marginBottom: '0.4rem',
    color: '#fff',
    backgroundColor: itemColor,
    borderRadius: '10px',
    padding: '0.4rem 0.6rem',
  }

  const metadata = {
    fontSize: '80%',
    color: userColor,
  }

  const time = {
    float: 'right',
  }

  const name = isThisUser
    ? {
        backgroundColor: itemColor,
        borderRadius: '4px',
        padding: '0.2rem 0.4rem',
        color: 'white',
      }
    : {
        padding: '0.2rem',
      }

  return (
    <li style={messageItem}>
      <div style={messageText}>{message}</div>
      <div style={metadata}>
        <span style={name}>{isThisUser ? 'you' : username}</span>
        <span style={time}>{timeAgo}</span>
      </div>
    </li>
  )
}

export default MessageItem
