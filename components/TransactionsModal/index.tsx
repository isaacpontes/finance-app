import { Modal, Pressable, Text, View } from "react-native"
import PrimaryButton from "../PrimaryButton"
import { styles } from "./styles"

interface TransactionsModalProps {
  visible: boolean
  onClose: () => void
  onSave: (data: { description: string, amount: number }) => void
}

export const TransactionsModal: React.FC<TransactionsModalProps> = ({ visible, onClose, onSave}) => {

  const handleSave = () => {
    onSave({ description: '', amount: 0})
    onClose()
  }

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.modalContent}>
        <Text style={styles.title}>Adicionar transação</Text>

        <View style={styles.buttonsContainer}>
          <PrimaryButton title="Salvar transação" onPress={handleSave} />

          <Pressable style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Fechar</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  )
}