import { IInitialState, IUser, IUserInfo } from "../types"

export const getUserData = (state: IInitialState): IUser => state.user
export const getUserInfo = (state: IInitialState): IUserInfo => getUserData(state).userInfo
