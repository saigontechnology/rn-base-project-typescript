import {NativeStackScreenProps} from '@react-navigation/native-stack'
import React, {PropsWithChildren} from 'react'
import {ScreenContainer} from '../../components'
import RouteKey from '../../navigation/RouteKey'
import {AppStackParamList} from '../../navigation/types'

type Props = NativeStackScreenProps<AppStackParamList, RouteKey.SignUpScreen> & PropsWithChildren

export const SignUpScreen: React.FC<Props> = props => <ScreenContainer>{props.children}</ScreenContainer>
