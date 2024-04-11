import React, {useEffect, useRef, useState} from 'react'
import {Animated, LayoutAnimation, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {FontSizes, colors, hitSlop, metrics} from '../themes'
import Emitter from '../utilities/Emitter'
import {useSafeAreaInsets} from 'react-native-safe-area-context'

export const TOAST_TYPE = {
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
  INFO: 'INFO',
  WARNING: 'WARNING',
} as const

interface IToastState {
  message: string
  type: keyof typeof TOAST_TYPE
  subMessage?: string
}

const messageContent = {
  [TOAST_TYPE.SUCCESS]: {
    color: colors.success,
  },
  [TOAST_TYPE.ERROR]: {
    color: colors.error,
  },
  [TOAST_TYPE.INFO]: {
    color: colors.info,
  },
  [TOAST_TYPE.WARNING]: {
    color: colors.warning,
  },
} as const

const initState = {
  message: '',
  type: TOAST_TYPE.INFO,
  subMessage: '',
}

export const Toast: React.FC = () => {
  const insets = useSafeAreaInsets()
  const [state, setState] = useState<IToastState>(initState)
  const HEIGHT = insets.bottom + metrics.toast
  const animationRef = useRef<Animated.CompositeAnimation>()
  const animation = useRef(new Animated.Value(0)).current
  const offset = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [HEIGHT, 0 - metrics.xxs], // padding bottom metrics.xxs
  })
  const opacity = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  })

  const displayMessage = (args: IToastState): void => {
    animation.setValue(0)
    setState(args)
    animationRef.current?.stop()
    setTimeout(() => {
      animationRef.current = Animated.sequence([
        // Fade In
        Animated.timing(animation, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.delay(5000),
        // Fade Out
        Animated.timing(animation, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
      ])
      animationRef.current.start(() => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
      })
    }, 100)
  }

  const dismiss = () => {
    animationRef.current?.stop()
    setState(initState)
    Animated.timing(animation, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start()
  }

  useEffect(() => {
    Emitter.on('SHOW_TOAST_MESSAGE', displayMessage)
    return () => {
      Emitter.rm('SHOW_TOAST_MESSAGE')
    }
  }, [])

  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [{translateY: offset}],
          opacity: opacity,
          paddingBottom: insets.bottom,
        },
      ]}>
      <View
        style={[
          styles.messageContainer,
          {
            backgroundColor: messageContent[state.type].color,
          },
        ]}>
        <View style={styles.textContent}>
          <Text style={styles.titleStyle}>{state.message}</Text>
          {!!state.subMessage && <Text style={styles.textStyle}>{state.subMessage}</Text>}
        </View>
        <TouchableOpacity onPress={dismiss} hitSlop={hitSlop}>
          <Text style={styles.closeText}>X</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  )
}

export const showToast = (args: IToastState) => {
  Emitter.emit('SHOW_TOAST_MESSAGE', args)
}

const styles = StyleSheet.create({
  container: {
    zIndex: 9999,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: metrics.paddingHorizontal,
  },
  messageContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderRadius: metrics.borderRadius,
    paddingHorizontal: metrics.xs,
    paddingVertical: metrics.xxs,
  },
  textContent: {
    flex: 1,
    paddingHorizontal: metrics.xxs,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  titleStyle: {
    fontSize: FontSizes.title,
    color: colors.white,
  },
  textStyle: {
    fontSize: FontSizes.body,
    color: colors.white,
  },
  closeText: {
    color: colors.white,
  },
})
