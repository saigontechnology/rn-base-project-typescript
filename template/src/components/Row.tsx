import React, { ReactElement} from 'react'
import {View, StyleSheet, ViewProps} from 'react-native'

interface IRowProps {
  children: ReactElement
  style: ViewProps
}

const Row = ({style, children, ...props}: IRowProps) => <View style={[styles.row, style]}>{children}</View>

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
})

export default Row
