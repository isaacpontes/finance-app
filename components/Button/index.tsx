import { ActivityIndicator, Pressable, Text } from "react-native"
import styles from "./styles"

interface ButtonProps {
  title: string,
  variant?: 'primary' | 'outlined' | 'danger'
  loading?: boolean,
  onPress: () => void
}

const Button: React.FC<ButtonProps> = ({ title, variant = 'primary', loading, onPress }) => {
  const variantColorMap = {
    primary: '#2C5F30',
    outlined: '#f5f5f5',
    danger: '#f43445'
  }

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        {
          backgroundColor: variantColorMap[variant],
          borderColor: variant !== 'outlined' ? variantColorMap[variant] : variantColorMap.primary,
          borderWidth: 2
        }
      ]}
    >
      {
        loading ? (
          <ActivityIndicator
            color={variant === 'outlined' ? variantColorMap.primary : '#fff'}
            style={{ width: 100 }}
          />
        ) : (
          <Text
            style={[
              styles.buttonText,
              { color: variant === 'outlined' ? variantColorMap.primary : '#fff' }
            ]}
          >
            {title}
          </Text>
        )
      }
    </Pressable>
  )
}

export default Button