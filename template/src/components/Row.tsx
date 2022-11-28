import React, {FC, ReactElement, ReactNode} from 'react'
import {View, StyleSheet} from 'react-native'
import {ViewProps} from 'react-native'

interface IRowProps {
  children: ReactElement
  style: ViewProps
}

const Row = ({style, children, ...props}: IRowProps) => {
  return <View style={[styles.row, style]}>{children}</View>
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
})

export default Row
