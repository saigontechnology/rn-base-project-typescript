import RouteKey from '../navigation/RouteKey'
import {IInitialState} from './types'

const INITIAL_STATE: IInitialState = {
  app: {showGlobalIndicator: false, appState: RouteKey.SplashScreen},
  user: {
    userInfo: {},
  },
  loading: {},
}

export default INITIAL_STATE
