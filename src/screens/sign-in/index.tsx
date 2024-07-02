import { Button } from '@/components/button'
import theme from '@/theme'
import { ImageBackground, Text } from 'react-native'
import { styles } from './styles'

export function SignIn() {
  return (
    <ImageBackground source={theme.BACKGROUND_IMAGE} style={styles.view}>
      <Text style={styles.title}>Car Fleet</Text>
      <Text style={styles.slogan}>Gestão de uso de veículos</Text>
      <Button title="Entrar com Google" />
    </ImageBackground>
  )
}
