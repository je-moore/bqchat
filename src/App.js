import React from 'react'
import ConversationListWrapper from './containers/ConversationListWrapper'
import ChatWindow from './containers/ChatWindow'
import HeaderWrapper from './containers/HeaderWrapper'
import { StateProvider, initialState, reducer } from './state'

function App() {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <HeaderWrapper></HeaderWrapper>
      <main>
        <ConversationListWrapper />
        <ChatWindow />
      </main>
      <footer />
    </StateProvider>
  )
}

export default App
