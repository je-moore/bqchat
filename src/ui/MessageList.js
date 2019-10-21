import React from 'react'
import MessageItemWrapper from '../containers/MessageItemWrapper'

function MessageList({ currentConversation }) {
  const noMessages = { color: '#666', textAlign: 'center' }
  const list = {
    display: 'flex',
    flexDirection: 'column-reverse',
  }
  const listFrame = {
    maxHeight: '64vh',
    overflow: 'scroll',
    marginBottom: '1rem',
  }
  return (
    <div style={listFrame}>
      {currentConversation.loading && <pre>Loading</pre>}
      {currentConversation.error && (
        <pre>Error: {currentConversation.error.message}</pre>
      )}
      {currentConversation.result &&
        currentConversation.result.length === 0 && (
          <div style={noMessages}>No Messages Yet. Write something!</div>
        )}
      {currentConversation.result && currentConversation.result.length > 0 && (
        <ul style={list}>
          {currentConversation.result.map(item => (
            <MessageItemWrapper
              key={item.id}
              senderId={item.senderId}
              message={item.message}
              timestamp={item.timestamp}
            />
          ))}
        </ul>
      )}
    </div>
  )
}

export default MessageList
