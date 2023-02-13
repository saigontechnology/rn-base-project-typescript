import React, {ReactElement} from 'react'
import {View, StyleSheet, StyleProp, ViewStyle} from 'react-native'

interface IRowProps {
  children: ReactElement
  style: StyleProp<ViewStyle>
}

const Row = ({style, children}: IRowProps) => {
  return <View style={[styles.row, style]}>{children}</View>
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
})

export default Row
