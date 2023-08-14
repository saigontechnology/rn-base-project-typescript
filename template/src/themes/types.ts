export interface IHitSlop {
  top: number
  bottom: number
  right: number
  left: number
}

export interface IColor {
  [color: string]: string
}

export interface IShadow {
  shadowColor?: string
  shadowRadius?: number
  elevation?: number
  shadowOpacity?: number
  shadowOffset?: {width: number; height: number}
}

export interface IFontSize {
  small: number
  span: number
  body: number
  large: number
  title: number
}
