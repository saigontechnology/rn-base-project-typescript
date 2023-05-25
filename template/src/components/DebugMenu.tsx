import BottomSheet, {BottomSheetFlatList} from '@gorhom/bottom-sheet'
import React, {FC, ReactNode, useCallback, useMemo, useRef, useState} from 'react'
import {
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Button,
  StyleSheet,
  useWindowDimensions,
  ListRenderItemInfo,
} from 'react-native'
import {getApplicationName, getBuildNumber, getDeviceId} from 'react-native-device-info'
import Draggable from './Draggable'

import Config, {BOTTOM_SHEET_TYPE, CODEPUSH_KEYS, EXTRA_QA_ENVS} from '../constants/configs'

import {InfoMenu, InfoMenuRow, InfoMenuLink} from './InfoMenu'

import {colors, fonts, metrics} from '../themes'

import {useDispatch, useSelector} from 'react-redux'
import {getApiUrl, getCodePushKey} from '../store/selectors'
import {appActions} from '../store/reducers'
import {BottomSheetMethods} from '@gorhom/bottom-sheet/lib/typescript/types'
import {useTranslation} from 'react-i18next'
import {getString} from '../locale/I18nConfig'

interface Props {
  title: string
  children?: ReactNode
}

const DEBUGMENU_SIZE = 50
const SNAPPOINTS = ['95%']

const AppInfoSection: FC = () => {
  const appName = useMemo(() => getApplicationName(), [])
  const buildNumber = useMemo(() => getBuildNumber(), [])
  const deviceId = useMemo(() => getDeviceId(), [])
  const {t} = useTranslation()

  const infos = useMemo(
    () => [
      {key: '0', title: getString('deviceId'), description: deviceId},
      {key: '1', title: getString('appName'), description: appName},
      {key: '2', title: getString('buildNumber'), description: buildNumber},
      {key: '3', title: getString('appVersion'), description: Config.appVersion},
      {key: '4', title: getString('bundleId'), description: Config.appBundleID},
      {key: '5', title: getString('appEnv'), description: Config.APP_ENV || 'N/A'},
    ],
    [appName, buildNumber, deviceId],
  )

  return (
    <View style={styles.section}>
      <Text style={styles.h3}>{getString('info')}</Text>
      <View style={styles.content}>
        {infos.map(({key, title, description}) => (
          <InfoMenuRow key={key} style={styles.infoMenu} title={title} description={description} />
        ))}
      </View>
    </View>
  )
}

const EnvironmentSection: FC<Props> = ({title, children}) => (
  <View style={styles.section}>
    <Text style={styles.h3}>{title}</Text>
    <View style={styles.content}>{children}</View>
  </View>
)

const DebugMenu: FC = () => {
  const {t} = useTranslation()
  const [modalVisible, setModalVisible] = useState(false)
  const openModal = useCallback(() => setModalVisible(true), [])
  const closeModal = useCallback(() => setModalVisible(false), [])

  const dispatch = useDispatch()

  const codePushKey = useSelector(getCodePushKey)

  const currentApiUrl = useSelector(getApiUrl)

  const [bottomSheetType, setBottomSheetType] = useState<string>()

  const dimensions = useWindowDimensions()

  const bottomSheetRef = useRef<BottomSheetMethods>(null)

  const handleSnapPress = useCallback((index: number) => {
    bottomSheetRef.current?.snapToIndex(index)
  }, [])
  const handleClosePress = useCallback(() => {
    bottomSheetRef.current?.close()
  }, [])

  const openEnvironmentBottomSheet = useCallback(() => {
    setBottomSheetType(BOTTOM_SHEET_TYPE.env)
    closeModal()
    handleSnapPress(0)
  }, [closeModal, handleSnapPress])

  const openCodePushBottomSheet = useCallback(() => {
    setBottomSheetType(BOTTOM_SHEET_TYPE.codePush)
    closeModal()
    handleSnapPress(0)
  }, [closeModal, handleSnapPress])

  const renderEnvironmentItem = useCallback(
    ({item}: ListRenderItemInfo<string>) => {
      const isActive = item === (bottomSheetType === BOTTOM_SHEET_TYPE.env ? currentApiUrl : codePushKey)

      const onPress = () => {
        if (bottomSheetType === BOTTOM_SHEET_TYPE.codePush) {
          dispatch(appActions.setCodePushKey(item))
          //CodePush.restartApp(false)
        } else {
          dispatch(appActions.setApiUrl(item))
        }
        handleClosePress()
      }
      return (
        <Pressable disabled={isActive} style={styles.flatListItem} onPress={onPress}>
          <Text style={[styles.flatListItemTitle, styles.environmentText, isActive && styles.active]}>
            {item}
          </Text>
          {isActive ? <View style={styles.flatListItemIcon} /> : null}
        </Pressable>
      )
    },
    [bottomSheetType, codePushKey, currentApiUrl, dispatch, handleClosePress],
  )

  const codePush = useMemo(() => CODEPUSH_KEYS.find(item => item.dev === codePushKey), [codePushKey])
  const data = useMemo(
    (): string[] =>
      bottomSheetType === BOTTOM_SHEET_TYPE.env
        ? [Config.API_URL || '', ...EXTRA_QA_ENVS]
        : CODEPUSH_KEYS.map(i => i.dev),
    [],
  )

  return (
    <>
      <Draggable
        isCircle
        renderColor={colors.primary}
        renderSize={DEBUGMENU_SIZE}
        animatedViewProps={{height: dimensions.height}}
        x={dimensions.width - DEBUGMENU_SIZE * 1.5}
        y={dimensions.height - DEBUGMENU_SIZE * 2}
        renderText={Config.appVersion}
        onShortPressRelease={openModal}
      />
      <Modal animationType="fade" transparent={false} visible={modalVisible} onRequestClose={closeModal}>
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <Button color={colors.primary} onPress={closeModal} title={getString('close')} />
          </View>
          <ScrollView contentContainerStyle={styles.scrollContent}>
            <AppInfoSection />
            <EnvironmentSection title={getString('testingEnvironment')}>
              {EXTRA_QA_ENVS.length ? (
                <InfoMenuLink
                  style={styles.infoMenu}
                  title={getString('current')}
                  description={currentApiUrl}
                  linkTitle={getString('update')}
                  onPress={openEnvironmentBottomSheet}
                />
              ) : (
                <InfoMenu style={styles.infoMenu} title={getString('current')} description={currentApiUrl} />
              )}
            </EnvironmentSection>

            <EnvironmentSection title={getString('codePush')}>
              {CODEPUSH_KEYS.length ? (
                <InfoMenuLink
                  style={styles.infoMenu}
                  title={getString('current')}
                  description={codePush?.dev || CODEPUSH_KEYS[0].dev}
                  linkTitle={getString('update')}
                  onPress={openCodePushBottomSheet}
                />
              ) : (
                <InfoMenu
                  style={styles.infoMenu}
                  title={getString('current')}
                  description={codePush?.dev || CODEPUSH_KEYS[0].dev}
                />
              )}
            </EnvironmentSection>
          </ScrollView>
        </SafeAreaView>
      </Modal>

      <BottomSheet ref={bottomSheetRef} index={-1} enablePanDownToClose snapPoints={SNAPPOINTS}>
        <BottomSheetFlatList
          style={styles.flatList}
          contentContainerStyle={styles.flatListContent}
          data={data}
          keyExtractor={(item: string) => item}
          extraData={[currentApiUrl, codePushKey]}
          renderItem={renderEnvironmentItem}
        />
      </BottomSheet>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    borderBottomColor: colors.gray,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  scrollContent: {
    paddingHorizontal: metrics.xxs,
  },
  section: {
    marginTop: metrics.large,
  },
  content: {
    marginVertical: metrics.xxs,
  },
  infoMenu: {
    marginTop: metrics.small,
  },
  flatList: {
    flex: 1,
  },
  flatListContent: {
    padding: metrics.xs,
  },
  flatListItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: metrics.xs,
    borderBottomColor: colors.gray,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  flatListItemTitle: {
    flex: 1,
    marginRight: metrics.xxs,
  },
  flatListItemIcon: {
    width: metrics.large,
    height: metrics.large,
    backgroundColor: colors.primary,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: metrics.xs,
  },
  h3: {
    fontFamily: fonts.bold,
  },
  environmentText: {color: colors.black, fontWeight: 'normal'},
  active: {color: colors.primary, fontWeight: 'bold'},
})

export default DebugMenu
