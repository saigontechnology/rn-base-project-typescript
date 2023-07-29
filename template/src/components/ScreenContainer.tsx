import React, {PropsWithChildren} from 'react'
import {StyleSheet, View, ViewStyle, StyleProp} from 'react-native'

interface IRowProps extends PropsWithChildren {
  style?: StyleProp<ViewStyle>
}

export const ScreenContainer = ({children, style, ...rest}: IRowProps) => (
  <View style={[styles.container, style]} {...rest}>
    {children}
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
