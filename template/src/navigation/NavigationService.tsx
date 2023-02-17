import {NavigationContainerRef, StackActions} from '@react-navigation/native'
import * as React from 'react'
import {AppStackParamList} from './types'

export const navigationRef: React.RefObject<NavigationContainerRef<AppStackParamList>> =
  React.createRef()

export function navigate(name: keyof AppStackParamList, params: AppStackParamList[keyof AppStackParamList]): void {
  navigationRef.current?.navigate(name as never, params as never)
}

export const checkRouteOrigin = () => {
  return navigationRef.current?.getRootState().routeNames[0]
}

export function navigationPop() {
  navigationRef.current?.dispatch(StackActions.pop(1))
}

export function popToTop() {
  navigationRef.current?.dispatch(StackActions.popToTop())
}
