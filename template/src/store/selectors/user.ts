import {IInitialState} from '../../constants/interface/redux/InitialStateInterface'
import {IUser, IUserInfo} from '../../constants/interface/redux/UserInterface'

const getUserData = (state: IInitialState): IUser => {
  return state.user
}

export const getUserInfo = (state: IInitialState): IUserInfo => {
  return getUserData(state).userInfo
}
