import React, { useEffect } from 'react'
import { fetchUsers } from '../api'
import { useAsync } from 'react-async-hook'
import { useStateValue } from '../state'
import Header from '../ui/Header'

function HeaderWrapper() {
  const [{ allUsers, thisUser }, dispatch] = useStateValue()

  const getAllUsers = useAsync(fetchUsers, [])
  useEffect(() => {
    dispatch({ type: 'setAllUsers', payload: getAllUsers.result })
    // eslint-disable-next-line
  }, [getAllUsers.result, dispatch])

  const onUserSelect = (event, users) => {
    const selectedUser = users.find(u => u.id === event.target.value)
    dispatch({ type: 'setUser', payload: selectedUser })
  }

  return allUsers ? (
    <Header users={allUsers} thisUser={thisUser} onUserSelect={onUserSelect} />
  ) : null
}

export default HeaderWrapper
