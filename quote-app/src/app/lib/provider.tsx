'use client'
import { Provider } from 'react-redux'
import { store } from './store'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import UserContextComp from './userContext'
import SwitchModeButton from '../quotes/switchModeButton/SwitchModeButton'

let persistor = persistStore(store)

export function Providers({ children }: any) {
  UserContextComp()
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SwitchModeButton />
        {children}
      </PersistGate>
    </Provider>
  )
}
