import React, { useEffect, useRef } from 'react'

function MessageInput({ handleInputChange, asyncOnSubmit, text }) {
  // focus textarea on render
  const txt = useRef(null)
  useEffect(() => {
    txt.current.focus()
  }, [])

  const textarea = {
    maxWidth: '300px',
    minWidth: '300px',
    margin: '0 0 0.2rem',
    border: '1px solid #DDD',
    backgroundColor: '#f4f4f4',
    borderRadius: '8px',
    padding: '0.4rem',
  }
  const button = {
    display: 'block',
    textAlign: 'center',
    width: '100%',
    border: '1px solid #DDD',
    padding: '0.4rem 0',
    borderRadius: '8px',
    fontWeight: 'bold',
    backgroundColor: '#f4f4f4',
  }
  // for screenreaders only
  const label = {
    visibility: 'hidden',
    position: 'absolute',
  }

  return (
    <form onSubmit={asyncOnSubmit.execute} className="message-input">
      <label htmlFor="message-input" style={label}>
        Message
      </label>
      <textarea
        name="text"
        id="message-input"
        onChange={handleInputChange}
        ref={txt}
        style={textarea}
        rows="5"
        value={text}
      ></textarea>

      <button style={button} disabled={asyncOnSubmit.loading}>
        {asyncOnSubmit.loading ? '...' : 'Send'}
      </button>
    </form>
  )
}

export default MessageInput
