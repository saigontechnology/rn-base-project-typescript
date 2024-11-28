import {
  createNavigationContainerRef,
  NavigationAction,
  NavigationProp,
  NavigationState,
  StackActions,
} from '@react-navigation/native'
import {AppStackParamList} from './types'

export const navigationRef = createNavigationContainerRef<AppStackParamList>()

export const canGoBack = (): boolean => navigationRef.isReady() && navigationRef.canGoBack()

export const getState = (): NavigationState | null =>
  navigationRef.isReady() ? navigationRef.getState() : null

export const getParent = (): NavigationProp<AppStackParamList> | null =>
  navigationRef.isReady() ? navigationRef.getParent() : null

export const navigate = (
  name: keyof AppStackParamList,
  params?: AppStackParamList[keyof AppStackParamList],
) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name as string, params as object | undefined)
  }
}

export const pop = (count?: number) => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.pop(count))
  }
}

export const popToTop = () => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.popToTop())
  }
}

export const push = (name: keyof AppStackParamList, params: AppStackParamList[keyof AppStackParamList]) => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.push(name as string, params as object | undefined))
  }
}

export const checkRouteOrigin = () => navigationRef.getRootState().routeNames[0]

export function navigationPop(numberToPop = 1) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.pop(numberToPop))
  }
}

export const replace = (
  name: keyof AppStackParamList,
  params: AppStackParamList[keyof AppStackParamList],
) => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.replace(name as string, params as object | undefined))
  }
}

export const reset = (state: NavigationState) => {
  if (navigationRef.isReady()) {
    navigationRef.reset(state)
  }
}

export const resetTo = (name: string) => {
  if (navigationRef.isReady()) {
    navigationRef.reset({
      index: 0,
      routes: [{name}],
    })
  }
}

export const goBack = () => {
  if (canGoBack()) {
    navigationRef.goBack()
  }
}

export const setParams = (params: AppStackParamList[keyof AppStackParamList]) => {
  if (navigationRef.isReady()) {
    navigationRef.setParams(params as object | undefined)
  }
}

export const dispatch = (action: NavigationAction | ((state: NavigationState) => NavigationAction)) => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(action)
  }
}

export const getCurrentRouteName = () =>
  navigationRef.isReady() ? navigationRef?.getCurrentRoute()?.name : ''
