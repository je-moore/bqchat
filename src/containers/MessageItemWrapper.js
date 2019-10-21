import React from 'react'
import MessageItem from '../ui/MessageItem'
import { useStateValue } from '../state'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { utcToZonedTime } from 'date-fns-tz'
import ColorHash from 'color-hash'

function MessageItemWrapper({ senderId, message, timestamp }) {
  const [{ thisUser, allUsers }] = useStateValue()
  const username = allUsers.find(u => u.id.toString() === senderId.toString())
    .name
  const isThisUser = senderId.toString() === thisUser.id.toString()
  const timeAgo = formatDistanceToNow(
    utcToZonedTime(new Date(timestamp), 'Europe/Berlin'),
    {
      includeSeconds: true,
    }
  )

  // set deterministic color based on hash of username
  const colorHash = new ColorHash({ lightness: 0.5 })
  const userColor = colorHash.hsl(username)

  return (
    <MessageItem
      message={message}
      timeAgo={timeAgo}
      username={username}
      isThisUser={isThisUser}
      userColor={userColor}
    />
  )
}

export default MessageItemWrapper
