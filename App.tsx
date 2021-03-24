import React from 'react'
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from '@react-navigation/stack'
import { Provider } from 'react-redux'

import MainScreen from './src/MainScreen'
import ModalScreen from './src/ModalScreen'
import { store } from './src/store/store'

import { Routes } from './src/types/routes'

const AppNavigation = createStackNavigator()

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigation.Navigator mode="modal" initialRouteName={Routes.MAIN}>
          <AppNavigation.Screen
            name={Routes.MAIN}
            component={MainScreen}
            options={{ headerShown: false, }}
          />
          <AppNavigation.Screen
            name={Routes.MODAL}
            component={ModalScreen}
          />
        </AppNavigation.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

