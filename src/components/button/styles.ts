import theme from '@/theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  primaryButton: {
    height: 56,
    width: '100%',
    backgroundColor: theme.COLORS.BRAND_MID,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  primaryButtonText: {
    color: theme.COLORS.WHITE,
    fontSize: theme.FONT_SIZE.MD,
    fontFamily: theme.FONT_FAMILY.BOLD,
  },
})
