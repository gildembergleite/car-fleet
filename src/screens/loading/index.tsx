import { ActivityIndicator, View } from 'react-native'
import theme from '../../theme'
import { styles } from './style'

export function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={theme.COLORS.BRAND_LIGHT} />
    </View>
  )
}
