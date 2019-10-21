import React, { createContext, useContext, useReducer } from 'react'

export const initialState = {
  thisUser: { id: 1, name: 'Wesley' },
  allUsers: { loading: true },
  currentConversationId: null,
  currentConversation: {},
  recentConversations: { loading: true },
}

export const reducer = (state, action) => {
  switch (action.type) {
    case 'setUser':
      return {
        ...state,
        thisUser: action.payload,
      }
    case 'setAllUsers':
      return {
        ...state,
        allUsers: action.payload,
      }
    case 'setRecentConversations':
      const recentConversations = action.payload.result
        ? { ...action.payload, result: action.payload.result.slice(-200) }
        : action.payload
      return {
        ...state,
        recentConversations,
      }
    case 'selectConversation':
      return {
        ...state,
        currentConversationId: action.payload,
      }
    case 'setCurrentConversation':
      return {
        ...state,
        currentConversation: action.payload,
      }
    default:
      return state
  }
}

export const StateContext = createContext()

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
)

export const useStateValue = () => useContext(StateContext)
