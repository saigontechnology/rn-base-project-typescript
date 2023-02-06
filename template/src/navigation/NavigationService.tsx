import { NavigationContainerRef, StackActions } from '@react-navigation/native'
import * as React from 'react'
import { INavigationParams } from './types'

export const navigationRef: React.RefObject<NavigationContainerRef<ReactNavigation.RootParamList>> = React.createRef()

export function navigate(name: string, params: INavigationParams): void {
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
