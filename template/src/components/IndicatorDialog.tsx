import React from 'react'
import {View, StyleSheet, Dimensions, ActivityIndicator} from 'react-native'
import {ViewProps, ActivityIndicatorProps} from 'react-native'

interface IIndicatorDialogProps {
  containerStyle: ViewProps
  activityIndicatorStyle: ActivityIndicatorProps
}

const {width, height} = Dimensions.get('screen')
export default function IndicatorDialog(props: IIndicatorDialogProps) {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width,
    height,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
})
