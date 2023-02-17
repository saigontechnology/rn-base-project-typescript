import React, {ReactElement} from 'react'
import {StyleSheet, View, ViewStyle, StyleProp} from 'react-native'

interface IRowProps {
  children: ReactElement | null
  style: StyleProp<ViewStyle>
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
