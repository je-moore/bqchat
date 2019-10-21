import React, { useEffect } from 'react'
import ConversationList from '../ui/ConversationList'
import { fetchMyConvos } from '../api'
import { useAsync } from 'react-async-hook'
import { useStateValue } from '../state'

function ConversationsWrapper() {
  const [
    { recentConversations, thisUser, currentConversationId },
    dispatch,
  ] = useStateValue()

  const getRecentConversations = useAsync(fetchMyConvos, [thisUser.id])
  useEffect(() => {
    dispatch({
      type: 'setRecentConversations',
      payload: getRecentConversations,
    })
    // eslint-disable-next-line
  }, [getRecentConversations.result, dispatch])

  // backend is referencing non-existent user 0 in inside some conversations :/
  const validRecentConversations = recentConversations.result
    ? {
        ...recentConversations,
        result: recentConversations.result.filter(
          conversation =>
            conversation.users.find(user => user.userid === '0') === undefined
        ),
      }
    : recentConversations

  return (
    <ConversationList
      currentConversationId={currentConversationId}
      recentConversations={validRecentConversations}
    />
  )
}

export default ConversationsWrapper
