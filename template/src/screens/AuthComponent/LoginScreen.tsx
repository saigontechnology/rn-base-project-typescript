import {NativeStackScreenProps} from '@react-navigation/native-stack'
import React from 'react'
import {ScreenContainer} from '../../components'
import RouteKey from '../../navigation/RouteKey'
import {AppStackParamList} from '../../navigation/types'

type Props = NativeStackScreenProps<AppStackParamList, RouteKey.LoginScreen>

export const LoginScreen: React.FC<Props> = () => <ScreenContainer />
