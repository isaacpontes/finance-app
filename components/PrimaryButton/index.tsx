import { Pressable, Text } from "react-native"
import styles from "./styles"

const PrimaryButton: React.FC<{
  title: string,
  onPress: () => void
}> = ({ title, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        { backgroundColor: pressed ? '#999' : '#2C5F30' }
      ]}
    >
      {({ pressed }) => (
        <Text style={styles.buttonText}>
          {pressed ? 'pressionado...' : title}
        </Text>
      )}
    </Pressable>
  )
}

export default PrimaryButton