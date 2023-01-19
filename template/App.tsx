import React from 'react'
import {LogBox, Text} from 'react-native'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import {Provider} from 'react-redux'
import MainLayout from './src/MainLayout'
import {store} from './src/store/store'

interface TextWithDefaultProps extends Text {
  defaultProps?: {
    allowFontScaling?: boolean
    underlineColorAndroid?: 'transparent'
  }
}

;(Text as unknown as TextWithDefaultProps).defaultProps =
  (Text as unknown as TextWithDefaultProps).defaultProps || {}
;(Text as unknown as TextWithDefaultProps).defaultProps!.allowFontScaling = false
;(Text as unknown as TextWithDefaultProps).defaultProps = {
  ...(Text as unknown as TextWithDefaultProps).defaultProps,
  allowFontScaling: false,
  underlineColorAndroid: 'transparent',
}
LogBox.ignoreAllLogs(true)

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
