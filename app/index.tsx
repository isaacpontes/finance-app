import PrimaryButton from "@/components/PrimaryButton";
import { TransactionsModal } from "@/components/TransactionsModal";
import { globalStyles } from "@/styles/global";
import { useState } from "react";
import { Image, StatusBar, Text, View } from "react-native";

const transactions = [
  { id: '1', description: 'Supermercado', amount: -50.75 },
  { id: '2', description: 'Salário', amount: 2500.00 },
  { id: '3', description: 'Restaurante', amount: -120.40 },
  { id: '4', description: 'Aluguel', amount: -800.00 },
];

export default function Index() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const name = "Isaac"

  const hanldeAddTransaction = (data: { description: string, amount: number }) => {
    console.log(data)
    alert('Transação salva com sucesso!')
  }

  return (
    <View style={globalStyles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={'#2C5F30'} />

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
        R$ 1.529,85
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

      {transactions.map(transaction => (
        <View key={transaction.id} style={globalStyles.transactionItem}>
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
      ))}
    </View>
  );
}


