import ky from 'ky'

export const fetchUsers = async () =>
  (await ky(`http://placeholder.webservice.com/users`)).json()

export const fetchMyConvos = async id =>
  (await ky(`http://placeholder.webservice.com/conversation/user/${id}`)).json()

export const fetchConversation = async (id, limit) =>
  id
    ? (await ky(
        `http://placeholder.webservice.com/conversation/${id}/message/limited?limit=${limit}&offset=0`
      )).json()
    : null

export const pollConversation = async (conversationId, lastMessageId) =>
  (await ky(
    `http://placeholder.webservice.com/conversation/${conversationId}/new/${lastMessageId}`
  )).json()

export const updateConversation = async (conversationId, message, senderId) =>
  (await ky.post(
    `http://placeholder.webservice.com/conversation/${conversationId}/message/send`,
    { json: { message: message, senderId: senderId } }
  )).json()
