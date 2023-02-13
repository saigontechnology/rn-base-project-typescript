import {PayloadAction} from '@reduxjs/toolkit'

export interface IAction<T> {
  type: string
  payload: PayloadAction<T>
  onSuccess: () => void
  onFailure: () => void
}

export interface IActionDispatch {
  type: string
  payload: any
  onSuccess: () => void
  onFailure: () => void
}

export interface IActionTypes {
  ORIGIN: string
  HANDLER: string
  SUCCESS: string
  FAILURE: string
}
