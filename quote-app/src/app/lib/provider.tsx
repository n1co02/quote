'use client'
import { Provider } from 'react-redux'
import storage, { store } from './store'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import UserContextComp from './userContext'

let persistor = persistStore(store)

export function Providers({ children }) {
  UserContextComp()
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>{children}</PersistGate>
    </Provider>
  )
}
