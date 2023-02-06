import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { useSelector } from 'react-redux'
import SplashScreen from '../screens/SplashScreen'
import { getAppStackState } from '../store/selectors'
import { navigationRef } from './NavigationService'
import RouteKey from './RouteKey'
import { AuthNavigator, HomeNavigator } from './StackNavigation'

function AppNavigation(): React.ReactElement {
  const appState: string = useSelector(getAppStackState)

  function renderStack(): React.ReactNode {
    switch (appState) {
      case RouteKey.AuthStack:
        return <AuthNavigator />
      case RouteKey.HomeStack:
        return <HomeNavigator />
      default:
        return <SplashScreen />
    }
  }

  return <NavigationContainer ref={navigationRef}>{renderStack()}</NavigationContainer>
}

export default AppNavigation
