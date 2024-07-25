import React, {useCallback} from 'react'
import {ListConversationScreen} from 'rn-firebase-chat'
import {navigate} from '../../navigation/NavigationService'
import RouteKey from '../../navigation/RouteKey'

export const ListChatScreen: React.FC = () => {
  const handleItemPress = useCallback((data: object | undefined) => {
    navigate(RouteKey.ChatScreen, data)
  }, [])

  return <ListConversationScreen onPress={handleItemPress} />
}
