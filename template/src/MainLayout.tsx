import React, {useCallback, useEffect, useRef} from 'react'
import {AppState, Linking, StatusBar, StyleSheet} from 'react-native'
import {useSelector} from 'react-redux'
import AppNavigation from './navigation/AppNavigator'
import RouteKey from './navigation/RouteKey'
import {getAppStackState, getLoadingIndicator} from './store/selectors'
import configs from './constants/configs'
import {DebugMenu, IndicatorDialog, Toast} from './components'
import {GestureHandlerRootView} from 'react-native-gesture-handler'
import {ChatProvider} from 'rn-firebase-chat'

function MainLayout() {
  const appState = useSelector(getAppStackState)
  const appStateRef = useRef(AppState.currentState)
  const showGlobalIndicator = useSelector(getLoadingIndicator)

  const handleAppState = useCallback(() => {
    AppState.addEventListener('change', nextAppState => {
      if (appStateRef.current.match(/inactive|background/) && nextAppState === 'active') {
        // Update action when appState changes
      }
      appStateRef.current = nextAppState
    })
  }, [])

  const handleDeepLink = useCallback(() => {
    Linking.getInitialURL().then(res => {
      // This function only work when disable debug mode.
      if (res) {
        // Do something if app is opened from an url
      }
    })
    Linking.addEventListener('url', res => {
      if (res?.url) {
        // Do something if app is opened from an url
      }
    })
  }, [])

  useEffect(() => {
    if (appState === RouteKey.MainStack) {
      handleAppState()
      handleDeepLink()
    }
  }, [appState, handleAppState, handleDeepLink])

  const userInfo = {
    id: 'Flash',
    name: 'Flash',
    avatar: 'https://shorturl.at/ejilU',
  }

  return (
    <GestureHandlerRootView style={styles.container}>
      <ChatProvider userInfo={userInfo}>
        <StatusBar barStyle="light-content" />
        <AppNavigation />
        {showGlobalIndicator && <IndicatorDialog />}
        {configs.DEBUG_ENABLED && <DebugMenu />}
        <Toast />
      </ChatProvider>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default MainLayout
