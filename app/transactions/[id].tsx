import Button from "@/components/Button"
import { TransactionsModal } from "@/components/TransactionsModal"
import { useTransactions } from "@/hooks/useTransactions"
import { globalStyles } from "@/styles/global"
import formatDate from "@/utils/format-date"
import { Stack, useLocalSearchParams, useRouter } from "expo-router"
import { useState } from "react"
import { Text, View } from "react-native"

const TransactionScreen = () => {
  const { id } = useLocalSearchParams<{ id: string }>()
  const { findTransactionById, updateTransaction, deleteTransaction } = useTransactions()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const router = useRouter()

  const transaction = findTransactionById(id)

  if (!transaction) return null

  const handleSave = (data: { description: string, amount: number, referenceDate: Date }) => {
    updateTransaction(transaction.id, data)
    setIsModalOpen(false)
  }

  const handleClose = () => {
    setIsModalOpen(false)
  }

  const handleDelete = () => {
    deleteTransaction(transaction.id)
    router.replace('/transactions')
  }

  return (
    <View style={globalStyles.container}>
      <Stack.Screen options={{ title: `Transação ${id}` }} />

      <Text style={globalStyles.sectionTitle}>{transaction.description}</Text>

      <Text style={{ fontSize: 20, marginBottom: 10 }}>
        R$ {transaction.amount.toFixed(2)}
      </Text>

      <Text>{formatDate(transaction.referenceDate)}</Text>

      <View style={[globalStyles.buttonsContainer, { marginTop: 20 }]}>
        <Button
          title="Editar transação"
          variant="outlined"
          onPress={() => setIsModalOpen(true)}
        />
        <Button
          title="Excluir transação"
          variant="danger"
          onPress={handleDelete}
        />
      </View>

      <TransactionsModal
        visible={isModalOpen}
        initialDescription={transaction.description}
        initialAmount={transaction.amount.toString()}
        initialReferenceDate={transaction.referenceDate.toISOString()}
        onSave={handleSave}
        onClose={handleClose}
      />
    </View>
  )
}

export default TransactionScreen