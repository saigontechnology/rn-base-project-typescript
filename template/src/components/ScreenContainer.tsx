import React, {ReactElement} from 'react'
import {StyleSheet, View, ViewStyle} from 'react-native'

interface IRowProps {
  children: ReactElement
  style: ViewStyle
}

const ScreenContainer = ({children, style, ...rest}: IRowProps) => {
  return (
    <View style={[styles.container, style]} {...rest}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default ScreenContainer
