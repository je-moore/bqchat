import React from 'react'
import ConversationItemWrapper from '../containers/ConversationItemWrapper'

function Conversations({ recentConversations, currentConversationId }) {
  const nav = {
    padding: '0 2rem 0 1.6rem',
    margin: '0 auto',
  }
  return (
    <div id="chat-list">
      {recentConversations.loading && <nav style={nav}>Loading...</nav>}
      {recentConversations.error && (
        <pre>Error: {recentConversations.error.message}</pre>
      )}
      {recentConversations.result && (
        <nav style={nav}>
          <ul>
            {recentConversations.result.slice(-20).map(item => (
              <ConversationItemWrapper
                key={item.conversation.conversationId}
                item={item}
                current={
                  currentConversationId === item.conversation.conversationId
                    ? true
                    : false
                }
              />
            ))}
          </ul>
        </nav>
      )}
    </div>
  )
}

export default Conversations
