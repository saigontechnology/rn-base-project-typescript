import {actionTypes} from '../actionTypes'
import {IActionTypes} from '../types'

const USER_LOGIN_ACTIONS: IActionTypes = actionTypes('USER_LOGIN_ACTIONS')

const USER_SIGN_UP_ACTIONS: IActionTypes = actionTypes('USER_SIGN_UP_ACTIONS')

const USER_LOG_OUT_ACTIONS: IActionTypes = actionTypes('USER_LOG_OUT_ACTIONS')

const UPDATE_USER_INFO_ACTIONS: IActionTypes = actionTypes('UPDATE_USER_INFO_ACTIONS')

export const USER_CONSTANTS_ACTIONS = {
  USER_LOGIN_ACTIONS,
  USER_SIGN_UP_ACTIONS,
  USER_LOG_OUT_ACTIONS,
  UPDATE_USER_INFO_ACTIONS,
}
