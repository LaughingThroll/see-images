import React from 'react'
import { Provider } from 'react-redux'
import { View } from 'react-native'

import { store } from './src/store/store'
import MainLayout from './src/MainLayout'

export default function App() {
  return (
    <View>
      <Provider store={store}>
        <MainLayout />
      </Provider>

    </View>
  )
}

