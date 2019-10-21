import React from 'react'

function Header({ users, thisUser, onUserSelect }) {
  const header = {
    backgroundColor: '#000',
    padding: '0.4rem 1rem',
    color: '#fff',
  }
  const h1 = {
    display: 'inline',
    paddingRight: '3rem',
    margin: '0',
  }
  const mockLogin = {
    fontSize: '105%',
    position: 'relative',
    top: '-0.2rem',
    display: 'inline',
  }
  const select = {
    fontSize: '105%',
    padding: '0rem 0.4rem 0.1rem 0',
  }
  return (
    <header style={header}>
      <h1 style={h1}>bqchat</h1>
      {users.loading ? (
        'loading...'
      ) : (
        <div style={mockLogin}>
          <label htmlFor="user-select">Mock User Login: &nbsp;</label>
          <select
            name="user-select"
            id="user-select"
            style={select}
            onChange={event => onUserSelect(event, users)}
          >
            {users.map(user => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
        </div>
      )}
    </header>
  )
}

export default Header
