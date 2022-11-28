import {IActionTypes} from '../../constants/interface/common/CommonInterface'
import {actionTypes} from '../actionTypes'

const GET_SETTING_APP_ACTIONS: IActionTypes = actionTypes('GET_SETTING_APP_ACTIONS')

const LOGIN_ACTIONS: IActionTypes = actionTypes('LOGIN_ACTIONS')

export const APP_CONSTANTS_ACTIONS = {
  GET_SETTING_APP_ACTIONS,
  LOGIN_ACTIONS,
}
