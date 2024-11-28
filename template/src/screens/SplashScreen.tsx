import React, {useEffect, useState} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import CodePush from 'react-native-code-push'
import * as Progress from 'react-native-progress'
import {ScreenContainer} from '../components'
import configs from '../constants/configs'
import {appActions} from '../store/reducers/app'
import {useDispatch} from 'react-redux'
import {colors, deviceWidth, metrics, responsiveHeight} from '../themes'

const codePushOptions = {
  installMode: CodePush.InstallMode.IMMEDIATE,
  deploymentKey: configs.codePushKey,
}

const STATUS = {
  check: 'Checking for update',
  download: 'Downloading...',
  done: 'Done',
}

const SplashScreen = () => {
  const dispatch = useDispatch()
  const [updatePercent, setUpdatePercent] = useState(0)
  const [statusText, setStatusText] = useState('')

  useEffect(() => {
    CodePush.sync(
      codePushOptions,
      status => {
        switch (status) {
          case CodePush.SyncStatus.UP_TO_DATE:
          case CodePush.SyncStatus.UNKNOWN_ERROR:
            dispatch(appActions.getSettings())
            break
          case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
          case CodePush.SyncStatus.INSTALLING_UPDATE:
          case CodePush.SyncStatus.SYNC_IN_PROGRESS:
            setStatusText(STATUS.download)
            break
          default:
            setStatusText(STATUS.check)
        }
      },
      ({receivedBytes, totalBytes}) => {
        const percent = receivedBytes / totalBytes
        if (totalBytes > 0) {
          setUpdatePercent(percent)
        }
        if (percent === 1) {
          setStatusText(STATUS.done)
        }
      },
    ).catch(() => {
      dispatch(appActions.getSettings())
    })
  }, [dispatch])

  return (
    <ScreenContainer style={styles.container}>
      {updatePercent > 0 ? (
        <View style={styles.progressBar}>
          <Progress.Bar progress={updatePercent} color={colors.primary} width={deviceWidth() * 0.6} />
          <Text style={styles.progressText}>{statusText}</Text>
        </View>
      ) : null}
    </ScreenContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressBar: {
    position: 'absolute',
    bottom: responsiveHeight(40),
    alignSelf: 'center',
    alignItems: 'center',
  },
  progressText: {
    color: colors.primary,
    paddingTop: metrics.xxs,
  },
})

export default SplashScreen
