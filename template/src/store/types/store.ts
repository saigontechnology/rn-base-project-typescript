import {IApp} from './app'
import {ILoading} from './loading'
import {IUser} from './user'

export interface IInitialState {
  app: IApp
  user: IUser
  loading: ILoading
}

export interface IError {
  code: number
  message: string
}
