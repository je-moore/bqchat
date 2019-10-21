import React from 'react'

function ConversationItem({
  labelText,
  conversationId,
  selectConversation,
  current,
}) {
  const currentItem = current
    ? {
        textDecoration: 'underline',
      }
    : {}
  const itemStyle = {
    ...currentItem,
    cursor: 'pointer',
  }
  return (
    <li style={itemStyle} onClick={() => selectConversation(conversationId)}>
      Chat with {labelText}
    </li>
  )
}

export default ConversationItem
