import React from 'react'
import ConversationItem from '../ui/ConversationItem'
import { useStateValue } from '../state'

function ConversationItemWrapper({ item, current }) {
  const [{ thisUser, allUsers }, dispatch] = useStateValue()
  const otherUsernames = item.users
    // remove thisUser from allUsers
    .filter(user => user.userid.toString() !== thisUser.id.toString())
    // look up remaining usernames in allUsers
    .map(
      user =>
        allUsers.find(u => u.id.toString() === user.userid.toString()).name
    )

  const selectConversation = conversationId => {
    dispatch({
      type: 'selectConversation',
      payload: conversationId,
    })
  }

  return (
    otherUsernames.length > 0 && (
      <ConversationItem
        labelText={otherUsernames.join(', ')}
        conversationId={item.conversation.conversationId}
        selectConversation={selectConversation}
        current={current}
      />
    )
  )
}

export default ConversationItemWrapper
