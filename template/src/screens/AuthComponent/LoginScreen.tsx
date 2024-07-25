import {NativeStackScreenProps} from '@react-navigation/native-stack'
import React, {PropsWithChildren} from 'react'
import {ScreenContainer} from '../../components'
import RouteKey from '../../navigation/RouteKey'
import {AppStackParamList} from '../../navigation/types'
import {Button} from 'react-native'
import {navigate} from '../../navigation/NavigationService'

type Props = NativeStackScreenProps<AppStackParamList, RouteKey.LoginScreen> & PropsWithChildren

export const LoginScreen: React.FC<Props> = props => (
  <ScreenContainer>
    <Button title="Go To Chat List" onPress={() => navigate(RouteKey.ListChatScreen, {})} />
  </ScreenContainer>
)
