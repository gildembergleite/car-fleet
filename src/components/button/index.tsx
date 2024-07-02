import theme from '@/theme'
import { ReactNode } from 'react'
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native'
import { styles } from './styles'

export interface ButtonProps extends TouchableOpacityProps {
  title: ReactNode
  type?: 'primary'
  isLoading?: boolean
}

export function Button({
  title,
  type = 'primary',
  isLoading = false,
  ...rest
}: ButtonProps) {
  const buttonStyle = type === 'primary' ? styles.primaryButton : {}
  const textStyle = type === 'primary' ? styles.primaryButtonText : {}

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={buttonStyle}
      disabled={isLoading}
      {...rest}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color={theme.COLORS.WHITE} />
      ) : (
        <Text style={textStyle}>{title}</Text>
      )}
    </TouchableOpacity>
  )
}
