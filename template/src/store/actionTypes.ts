import {IActionTypes} from '../constants/interface/common/CommonInterface'

export const actionTypes = (actionName: string): IActionTypes => ({
    ORIGIN: actionName,
    HANDLER: `${actionName}_REQUEST`,
    SUCCESS: `${actionName}_SUCCESS`,
    FAILURE: `${actionName}_FAILURE`,
  })
