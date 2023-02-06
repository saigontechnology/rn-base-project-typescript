import { IColor } from "./types"

const colors: IColor = {
  primary: '#65c8c6',
  black: '#1F1F1F',
  white: '#ffffff',
  gray: '#454545',
  red: '#ff0009',
}

const getColorOpacity = (color: string, opacity: number): string => {
  if (opacity >= 0 && opacity <= 1 && color.includes('#')) {
    const hexValue = Math.round(opacity * 255).toString(16)
    return `${color.slice(0, 7)}${hexValue.padStart(2, '0').toUpperCase()}`
  }
  return color
}

export {
  colors,
  getColorOpacity
}

