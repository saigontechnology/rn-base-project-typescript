import { actionTypes } from '../actionTypes'
import { IActionTypes } from '../types'

const GET_SETTING_APP_ACTIONS: IActionTypes = actionTypes('GET_SETTING_APP_ACTIONS')

const LOGIN_ACTIONS: IActionTypes = actionTypes('LOGIN_ACTIONS')

export const APP_CONSTANTS_ACTIONS = {
  GET_SETTING_APP_ACTIONS,
  LOGIN_ACTIONS,
}
