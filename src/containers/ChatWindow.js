import React from 'react'
import MessageList from '../ui/MessageList'
import MessageInputWrapper from './MessageInputWrapper'
import { fetchConversation } from '../api'
import { useStateValue } from '../state'
import useInterval from '../hooks/useInterval'

function ChatWindowWrapper() {
  const [
    { currentConversationId, currentConversation },
    dispatch,
  ] = useStateValue()

  const messageLimit = 20

  // poll message list every second
  useInterval(() => {
    currentConversationId &&
      fetchConversation(currentConversationId, messageLimit).then(result => {
        dispatch({
          type: 'setCurrentConversation',
          payload: { result },
        })
      })
  }, 1000)

  return (
    <div id="chat-window">
      <MessageList currentConversation={currentConversation} />
      <MessageInputWrapper />
    </div>
  )
}

export default ChatWindowWrapper
