import {
  createNavigationContainerRef,
  NavigationAction,
  NavigationProp,
  NavigationState,
  StackActions,
} from '@react-navigation/native'

import {AppStackParamList} from './types'

const createNavigation = () => {
  const navigationRef = createNavigationContainerRef()

  const canGoBack = (): boolean => navigationRef.isReady() && navigationRef.canGoBack()

  const getState = (): NavigationState | null =>
    navigationRef.isReady() ? navigationRef.getState() : null

  const getParent = (): NavigationProp<AppStackParamList> | null =>
    navigationRef.isReady() ? navigationRef.getParent() : null

  const navigate = (
    name: keyof AppStackParamList,
    params: AppStackParamList[keyof AppStackParamList],
  ) => {
    if (navigationRef.isReady()) {
      navigationRef.navigate(name as never, params as never)
    }
  }

  const pop = (count?: number) => {
    if (navigationRef.isReady()) {
      navigationRef.dispatch(StackActions.pop(count))
    }
  }

  const popToTop = () => {
    if (navigationRef.isReady()) {
      navigationRef.dispatch(StackActions.popToTop())
    }
  }

  const push = (
    name: keyof AppStackParamList,
    params: AppStackParamList[keyof AppStackParamList],
  ) => {
    if (navigationRef.isReady()) {
      navigationRef.dispatch(StackActions.push(name as never, params as never))
    }
  }

  const replace = (
    name: keyof AppStackParamList,
    params: AppStackParamList[keyof AppStackParamList],
  ) => {
    if (navigationRef.isReady()) {
      navigationRef.dispatch(StackActions.replace(name as never, params as never))
    }
  }

  const reset = (state: NavigationState) => {
    if (navigationRef.isReady()) {
      navigationRef.reset(state)
    }
  }

  const resetTo = (name: string) => {
    if (navigationRef.isReady()) {
      navigationRef.reset({
        index: 0,
        routes: [{name}],
      })
    }
  }

  const goBack = () => {
    if (canGoBack()) {
      navigationRef.goBack()
    }
  }

  const setParams = (params: AppStackParamList[keyof AppStackParamList]) => {
    if (navigationRef.isReady()) {
      navigationRef.setParams(params as never)
    }
  }

  const dispatch = (action: NavigationAction | ((state: NavigationState) => NavigationAction)) => {
    if (navigationRef.isReady()) {
      navigationRef.dispatch(action)
    }
  }

  const getCurrentRouteName = () => {
    if (navigationRef.isReady()) {
      return navigationRef?.getCurrentRoute()?.name
    }
    return ''
  }

  return {
    pop,
    popToTop,
    push,
    canGoBack,
    getState,
    getParent,
    navigate,
    reset,
    resetTo,
    goBack,
    setParams,
    dispatch,
    replace,
    getCurrentRouteName,
    ref: navigationRef,
  }
}

export const navigation = createNavigation()