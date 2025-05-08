import { useState } from "react"
import { Modal, Pressable, Switch, Text, TextInput, View } from "react-native"
import PrimaryButton from "../PrimaryButton"
import { styles } from "./styles"

interface TransactionsModalProps {
  visible: boolean
  onClose: () => void
  onSave: (data: { description: string, amount: number }) => void
}

export const TransactionsModal: React.FC<TransactionsModalProps> = ({ visible, onClose, onSave }) => {
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState('')
  const [datetimeDetail, setDatetimeDetail] = useState(false)

  const handleSave = () => {
    onSave({ description: description, amount: Number(amount) })
    setDescription('')
    setAmount('')
    onClose()
  }

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.modalContent}>
        <Text style={styles.title}>Adicionar transação</Text>

        <Text>Descrição</Text>
        <TextInput
          placeholder="Insira uma descrição..."
          style={styles.textInput}
          value={description}
          onChangeText={text => setDescription(text)}
          returnKeyType="next"
        />

        <Text>Valor</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Insira um valor..."
          keyboardType="default"
          returnKeyType="done"
          value={amount}
          onChangeText={text => setAmount(text)}
        />

        <View style={{ marginBottom: 20 }}>
          <Text>Detalhar data e hora?</Text>
          <Switch
            style={{ marginRight: 'auto' }} 
            value={datetimeDetail}
            onValueChange={newValue => setDatetimeDetail(newValue)}
          />

          {datetimeDetail && <TextInput placeholder="Informe a data e hora" style={styles.textInput} />}
        </View>


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