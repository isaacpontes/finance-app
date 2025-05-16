import { Transaction } from "@/entities/Transaction"
import { useTransactions } from "@/hooks/useTransactions"
import { globalStyles } from "@/styles/global"
import { Link } from "expo-router"
import { FlatList, ListRenderItem, Pressable, Text, View } from "react-native"

const renderTransaction: ListRenderItem<Transaction> = ({ item }) => {
  return (
    <Link
      href={{ pathname: '/transactions/[id]', params: { id: item.id } }}
      asChild
    >
      <Pressable>
        <View style={globalStyles.transactionItem}>
          <Text style={globalStyles.transactionText}>
            {item.description}
          </Text>
          <Text
            style={[
              globalStyles.transactionAmount,
              item.amount > 0 ? globalStyles.income : globalStyles.expense,
            ]}
          >
            R$ {item.amount}
          </Text>
        </View>
      </Pressable>
    </Link>
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