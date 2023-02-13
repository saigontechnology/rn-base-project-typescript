import React from 'react'
import ScreenContainer from '../../components/ScreenContainer'
import {HomeStackParamList} from '../../navigation/types'
import {StackNavigationProp} from '@react-navigation/stack'
import {RouteProp} from '@react-navigation/native'

interface IProps {
  navigation: StackNavigationProp<HomeStackParamList, 'HomeScreen'>
  route: RouteProp<HomeStackParamList, 'HomeScreen'>
}

const HomeScreen = (props: IProps) => {
  const {navigation, route} = props
  return <ScreenContainer children={<></>} style={{}} />
}

export default HomeScreen
