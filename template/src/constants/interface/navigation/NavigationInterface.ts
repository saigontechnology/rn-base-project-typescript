export interface INavigationParams {
  params?: INavigationOnlyParams | INavigationScreenAndParams
}

export type INavigationOnlyParams = object
export type INavigationScreenAndParams = {
  screen?: string
  params?: INavigationOnlyParams | INavigationScreenAndParams
}
