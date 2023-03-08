import React from 'react'
import {LogBox, Text} from 'react-native'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import {Provider} from 'react-redux'
import './src/locale/I18nConfig'
import MainLayout from './src/MainLayout'
import {injectStore} from './src/services/networking/axios'
import {store} from './src/store/store'
import {configureLocalization} from './src/locale/I18nConfig'

interface TextWithDefaultProps extends Text {
  defaultProps?: {
    allowFontScaling?: boolean
    underlineColorAndroid?: 'transparent'
  }
}

;(Text as unknown as TextWithDefaultProps).defaultProps = {
  ...(Text as unknown as TextWithDefaultProps).defaultProps,
  allowFontScaling: false,
  underlineColorAndroid: 'transparent',
}
LogBox.ignoreAllLogs(true)

injectStore(store)
configureLocalization('en')

function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <MainLayout />
      </SafeAreaProvider>
    </Provider>
  )
}

export default App
