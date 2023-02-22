import {StackActions} from '@react-navigation/native'
import {createNavigationContainerRef} from '@react-navigation/native'
import {INavigationParams} from '../constants/interface/navigation/NavigationInterface'
import {AppStackParamList} from './StackNavigation'
import {screenMatch} from './ScreenService'

export const navigationRef = createNavigationContainerRef<AppStackParamList>()

export function navigate(name: string, params: INavigationParams): void {
  if (navigationRef.isReady()) {
    navigationRef.navigate(screenMatch(name), params)
  }
}

export const checkRouteOrigin = () => navigationRef.getRootState().routeNames[0]

export function navigationPop() {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.pop(1))
  }
}

export function popToTop() {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.popToTop())
  }
}
