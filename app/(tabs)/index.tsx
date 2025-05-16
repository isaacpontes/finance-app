import PrimaryButton from "@/components/PrimaryButton";
import { TransactionsModal } from "@/components/TransactionsModal";
import { useTransactions } from "@/hooks/useTransactions";
import { globalStyles } from "@/styles/global";
import { Link } from "expo-router";
import { useState } from "react";
import { Image, Pressable, ScrollView, StatusBar, Text, View } from "react-native";

export default function Index() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const name = "Isaac"
  const { balance, addTransaction, getLastTransactions } = useTransactions()

  const hanldeAddTransaction = (data: { description: string, amount: number }) => {
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
        <PrimaryButton title="Adicionar transação" onPress={() => setIsModalOpen(true)} />
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
          <Link
            href={{ pathname: '/transactions/[id]', params: { id: transaction.id } }}
            key={transaction.id}
            asChild
          >
            <Pressable>
              <View style={globalStyles.transactionItem}>
                <Text style={globalStyles.transactionText}>
                  {transaction.description}
                </Text>
                <Text
                  style={[
                    globalStyles.transactionAmount,
                    transaction.amount > 0 ? globalStyles.income : globalStyles.expense,
                  ]}
                >
                  R$ {transaction.amount}
                </Text>
              </View>
            </Pressable>
          </Link>
        ))}
      </ScrollView>
    </View>
  );
}


