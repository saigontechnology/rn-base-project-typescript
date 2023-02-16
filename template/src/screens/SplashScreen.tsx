import React, {useEffect, useState} from 'react'
import {StyleSheet, View} from 'react-native'
import CodePush from 'react-native-code-push'
import Progress from 'react-native-progress'
import ScreenContainer from '../components/ScreenContainer'
import configs from '../constants/configs'
import {appActions} from '../store/reducers/app'
import {useAppDispatch} from '../store/store'
import {colors, deviceWidth, responsiveHeight} from '../themes'

const codePushOptions = {
  installMode: CodePush.InstallMode.IMMEDIATE,
  deploymentKey: configs.codePushKey,
}

const SplashScreen = () => {
  const dispatch = useAppDispatch()
  const [updatePercent, setUpdatePercent] = useState(0)

  useEffect(() => {
    CodePush.sync(
      codePushOptions,
      status => {
        switch (status) {
          case CodePush.SyncStatus.UP_TO_DATE:
          case CodePush.SyncStatus.UNKNOWN_ERROR:
            dispatch(appActions.getSettings())
            break
        }
      },
      ({receivedBytes, totalBytes}) => {
        if (totalBytes > 0) {
          setUpdatePercent(receivedBytes / totalBytes)
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
        </View>
      ) : (
        <></>
      )}
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
  },
})

export default SplashScreen
