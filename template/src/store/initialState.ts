import {IInitialState} from '../constants/interface/redux/InitialStateInterface'
import RouteKey from '../navigation/RouteKey'

const INITIAL_STATE: IInitialState = {
  app: {showGlobalIndicator: false, appState: RouteKey.SplashScreen},
  user: {
    userInfo: {},
  },
}

export default INITIAL_STATE
