import Button from "@/components/Button";
import TransactionListItem from "@/components/TransactionListItem";
import { TransactionsModal } from "@/components/TransactionsModal";
import { useTransactions } from "@/hooks/useTransactions";
import { globalStyles } from "@/styles/global";
import { useState } from "react";
import { Image, ScrollView, StatusBar, Text, View } from "react-native";

export default function Index() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const name = "Isaac"
  const { balance, addTransaction, getLastTransactions } = useTransactions()

  const hanldeAddTransaction = (data: { description: string, amount: number, referenceDate: Date }) => {
    addTransaction(data)
    alert('Transação salva com sucesso!')
  }

  return (
    <View style={globalStyles.container}>
      <StatusBar />

      <Image
        source={require('@/assets/images/finance-logo.png')}
        style={globalStyles.logo}
      />

      <Text style={globalStyles.greeting}>
        Olá, {name}!
      </Text>
      <Text style={globalStyles.balanceLabel}>
        Saldo Atual
      </Text>
      <Text style={globalStyles.balance}>
        R$ {balance.toFixed(2)}
      </Text>

      <View style={globalStyles.buttonsContainer}>
        <Button title="Adicionar transação" onPress={() => setIsModalOpen(true)} />
      </View>

      <TransactionsModal
        visible={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={hanldeAddTransaction}
      />

      <Text style={globalStyles.sectionTitle}>
        Transações Recentes
      </Text>

      <ScrollView>
        {getLastTransactions().map(transaction => (
          <TransactionListItem transaction={transaction} key={transaction.id} />
        ))}
      </ScrollView>
    </View>
  );
}


