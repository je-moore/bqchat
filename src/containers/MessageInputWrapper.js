import React, { useState, useEffect } from 'react'
import MessageInput from '../ui/MessageInput'
import { updateConversation } from '../api'
import { useAsyncCallback } from 'react-async-hook'
import { useStateValue } from '../state'

function MessageInputWrapper() {
  // eslint-disable-next-line
  const [{ thisUser, currentConversationId }] = useStateValue()

  const [text, setText] = useState('')

  useEffect(() => {
    setText(text)
  }, [text])

  const handleInputChange = event => {
    setText(event.target.value)
  }

  const onSubmit = event => {
    event.preventDefault()
    if (text === '') {
      return false
    }
    setText('')
    updateConversation(currentConversationId, text, thisUser.id)
  }
  const asyncOnSubmit = useAsyncCallback(onSubmit)

  return (
    currentConversationId && (
      <MessageInput
        handleInputChange={handleInputChange}
        asyncOnSubmit={asyncOnSubmit}
        text={text}
      />
    )
  )
}

export default MessageInputWrapper
