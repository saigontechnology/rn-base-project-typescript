import React from 'react'
import ScreenContainer from '../../components/ScreenContainer'
import {AuthStackParamList} from '../../navigation/types'
import {StackNavigationProp} from '@react-navigation/stack'
import {RouteProp} from '@react-navigation/native'

interface IProps {
  navigation: StackNavigationProp<AuthStackParamList, 'LoginScreen'>
  route: RouteProp<AuthStackParamList, 'LoginScreen'>
}

export const LoginScreen = (props: IProps) => {
  const {navigation, route} = props
  return <ScreenContainer children={<></>} style={{}} />
}
