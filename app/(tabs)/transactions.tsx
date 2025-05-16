import TransactionListItem from "@/components/TransactionListItem"
import { Transaction } from "@/entities/Transaction"
import { useTransactions } from "@/hooks/useTransactions"
import { globalStyles } from "@/styles/global"
import { FlatList, ListRenderItem, Text, View } from "react-native"

const renderTransaction: ListRenderItem<Transaction> = ({ item }) => {
  return (
    <TransactionListItem transaction={item} />
  )
}

const TransactionsScreen = () => {
  const { transactions} = useTransactions()

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.sectionTitle}>Todas as transações</Text>

      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={renderTransaction}
      />
    </View>
  )
}

export default TransactionsScreen