import * as React from 'react'
import {StackActions} from '@react-navigation/native'
import {INavigationParams} from '../constants/interface/navigation/NavigationInterface'

export const navigationRef: React.RefObject<any> = React.createRef()

export function navigate(name: string, params: INavigationParams): void {
  navigationRef.current?.navigate(name, params)
}

export const checkRouteOrigin = () => {
  return navigationRef.current.getRootState().routeNames[0]
}

export function navigationPop() {
  navigationRef.current?.dispatch(StackActions.pop(1))
}

export function popToTop() {
  navigationRef.current?.dispatch(StackActions.popToTop())
}
