export interface IAction {
  type: string
  payload: any
  onSuccess: () => void
  onFailure: () => void
}

export interface IActionDispatch {
  type: string
  payload: any
  onSuccess: () => void
  onFailure: () => void
}
