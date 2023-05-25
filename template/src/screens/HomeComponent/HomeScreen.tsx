import {NativeStackScreenProps} from '@react-navigation/native-stack'
import React from 'react'
import {ScreenContainer} from '../../components'
import RouteKey from '../../navigation/RouteKey'
import {AppStackParamList} from '../../navigation/types'

type Props = NativeStackScreenProps<AppStackParamList, RouteKey.HomeScreen>

const HomeScreen: React.FC<Props> = props => {
  const {navigation, route} = props
  return <ScreenContainer children={<></>} />
}

export default HomeScreen
