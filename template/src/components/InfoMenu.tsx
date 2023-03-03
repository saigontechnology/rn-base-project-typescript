import React, {FC, ReactNode} from 'react'
import {View, Text, Switch, TouchableOpacity, StyleSheet, StyleProp, ViewStyle, TextStyle} from 'react-native'
import {colors, metrics} from '../themes'

interface Props {
  title: string
  description: string
  descriptionStyle?: StyleProp<ViewStyle>
  style?: StyleProp<ViewStyle>
  titleStyle?: StyleProp<ViewStyle>
  action?: React.ReactElement
  horizontal?: boolean
  children?: ReactNode
}

interface LinkProps extends Props {
  onPress: () => void
  linkTitle: string
  linkTitleStyle?: StyleProp<TextStyle>
}

interface ToggleProps extends Props {
  onValueChange: (value: boolean) => void
  value: boolean
  disabled?: boolean
}

const InfoMenu: FC<Props> = ({
  title,
  description,
  descriptionStyle,
  style,
  titleStyle,
  action,
  horizontal,
  children,
}) => (
  <View style={[styles.container, style, horizontal && styles.row]}>
    <View style={styles.titleWrapper}>
      <Text style={titleStyle}>{title}</Text>
      {action}
    </View>
    <Text style={[styles.infoMenuText, descriptionStyle]}>{description}</Text>
    {children}
  </View>
)

const InfoMenuRow: FC<Props> = ({...rest}) => <InfoMenu {...rest} horizontal />

const InfoMenuLink: FC<LinkProps> = ({linkTitle, onPress, linkTitleStyle, ...rest}) => (
  <InfoMenu
    {...rest}
    action={
      <TouchableOpacity onPress={onPress}>
        <Text style={[{color: colors.primary}, linkTitleStyle]}>{linkTitle}</Text>
      </TouchableOpacity>
    }
  />
)
const InfoMenuToggle: FC<ToggleProps> = ({value, onValueChange, disabled = false, ...rest}) => (
  <InfoMenu {...rest} action={<Switch onValueChange={onValueChange} value={value} disabled={disabled} />} />
)

export {InfoMenu, InfoMenuRow, InfoMenuLink, InfoMenuToggle}

const styles = StyleSheet.create({
  container: {
    borderColor: colors.gray,
    paddingBottom: metrics.xs,
    justifyContent: 'space-between',
  },
  titleWrapper: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: metrics.xxs,
  },
  row: {
    flexDirection: 'row',
  },
  infoMenuText: {color: colors.gray},
})
