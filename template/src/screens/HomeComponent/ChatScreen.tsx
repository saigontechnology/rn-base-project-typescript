import React from 'react'
import {ActivityIndicator, StyleSheet} from 'react-native'
import FastImage from 'react-native-fast-image'
import {SafeAreaView} from 'react-native-safe-area-context'
import {ChatScreen as BaseChatScreen} from 'rn-firebase-chat'

const partnerInfo = {
  avatar: 'https://shorturl.at/I1BZZ',
  id: 'Vibe',
  name: 'Vibe',
}
const userInfo = {
  id: 'Flash',
  name: 'Flash',
  avatar: 'https://shorturl.at/ejilU',
}

export const ChatScreen: React.FC = () => {
  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      <BaseChatScreen
        partners={[userInfo, partnerInfo]}
        memberIds={[userInfo.id, partnerInfo.id]}
        renderLoadEarlier={() => {
          return <ActivityIndicator style={styles.loadEarlier} />
        }}
        hasCamera
        hasGallery
        renderAvatar={() => (
          <FastImage
            source={{uri: partnerInfo.avatar}}
            resizeMode={FastImage.resizeMode.cover}
            style={styles.avatar}
          />
        )}
        messagesContainerStyle={styles.messageContainer}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  loadEarlier: {
    marginVertical: 20,
  },
  avatar: {
    width: 28,
    aspectRatio: 1,
    borderRadius: 14,
  },
  messageContainer: {paddingBottom: 10},
})
