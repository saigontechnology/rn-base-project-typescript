import {BottomTabBarProps} from '@react-navigation/bottom-tabs'
import React from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import {IItemTabBar} from './types'

const CustomTabBar: React.FC<BottomTabBarProps> = props => {
  const {navigation} = props
  function renderItem(item: IItemTabBar) {
    const {route, title} = item
    return (
      <TouchableOpacity
        activeOpacity={1}
        key={route}
        style={styles.itemContainer}
        onPress={() => {
          if (route) {
            navigation.navigate(route)
          }
        }}>
        <Text style={[styles.title]}>{title}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      <View style={styles.wrapper}>{[].map(renderItem)}</View>
    </SafeAreaView>
  )
}

export default CustomTabBar

const styles = StyleSheet.create({
  container: {
    maxHeight: 80,
  },
  wrapper: {
    flexDirection: 'row',
    width: '100%',
  },
  itemContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  title: {},
})
