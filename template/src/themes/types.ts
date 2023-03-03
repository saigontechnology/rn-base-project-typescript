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

export interface IMetrics {
  // Text Size
  title: number
  span: number

  // spacing
  tiny: number
  xxs: number
  xs: number
  small: number
  sMedium: number
  medium: number
  large: number
  xl: number
  xxl: number
  huge: number
  massive: number

  borderRadius: number
  borderRadiusLarge: number
  borderRadiusHuge: number
  // margin
  marginTop: number
  marginHorizontal: number
  marginVertical: number
  paddingHorizontal: number

  voucherBorderRadius: number
  logoWidth: number
  logoHeight: number
  icon: number
}

export interface IFontSize {
  small: number
  span: number
  body: number
  large: number
  title: number
}
