import React, {useEffect, useRef, useState} from 'react'
import {Animated, Image, LayoutAnimation, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {FontSizes, Images, colors, hitSlop, metrics} from '../themes'
import Emitter from '../utilities/Emitter'
import {useSafeAreaInsets} from 'react-native-safe-area-context'

export const TOAST_TYPE = {
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
  INFO: 'INFO',
  WARNING: 'WARNING',
} as const
const TOAST_EVENTS = {
  showToastMessage: 'SHOW_TOAST_MESSAGE',
}
const DEFAULT_DELAY = 5000
const DEFAULT_DURATION = 300

interface IToastState {
  message: string
  type: keyof typeof TOAST_TYPE
  subMessage?: string
  option?: {
    delay?: number
    duration?: number
  }
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
          duration: args.option?.duration || DEFAULT_DURATION,
          useNativeDriver: true,
        }),
        Animated.delay(args.option?.delay || DEFAULT_DELAY),
        // Fade Out
        Animated.timing(animation, {
          toValue: 0,
          duration: args.option?.duration || DEFAULT_DURATION,
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
    Animated.timing(animation, {
      toValue: 0,
      duration: DEFAULT_DURATION,
      useNativeDriver: true,
    }).start(() => setState(initState))
  }

  useEffect(() => {
    Emitter.on(TOAST_EVENTS.showToastMessage, displayMessage)
    return () => {
      Emitter.rm(TOAST_EVENTS.showToastMessage)
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
        <Image source={Images.info} style={styles.icon} />
        <View style={styles.textContent}>
          <Text style={styles.titleStyle}>{state.message}</Text>
          {!!state.subMessage && <Text style={styles.textStyle}>{state.subMessage}</Text>}
        </View>
        <TouchableOpacity onPress={dismiss} hitSlop={hitSlop}>
          <Image source={Images.close} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </Animated.View>
  )
}

export const showToast = (args: IToastState) => {
  Emitter.emit(TOAST_EVENTS.showToastMessage, args)
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
  icon: {
    width: metrics.icon,
    height: metrics.icon,
    tintColor: colors.white,
  },
})
