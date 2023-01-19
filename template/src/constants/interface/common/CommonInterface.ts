export interface IHitSlop {
  top?: number
  bottom?: number
  right?: number
  left?: number
}

export interface IActionTypes {
  ORIGIN: string
  HANDLER: string
  SUCCESS: string
  FAILURE: string
}

export interface IRouteKey {
  [key: string]: string
}

export interface IError {
  message: object
  code: number
}
