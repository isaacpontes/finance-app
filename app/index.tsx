import PrimaryButton from "@/components/PrimaryButton";
import { TransactionsModal } from "@/components/TransactionsModal";
import { globalStyles } from "@/styles/global";
import { useState } from "react";
import { FlatList, Image, ListRenderItem, StatusBar, Text, View } from "react-native";

type Transaction = {
  id: string
  description: string
  amount: number
}

const transactions: Transaction[] = [
  { id: '1', description: 'Supermercado', amount: -50.75 },
  { id: '2', description: 'Salário', amount: 2500.00 },
  { id: '3', description: 'Restaurante', amount: -120.40 },
  { id: '4', description: 'Aluguel', amount: -800.00 },
  { id: '5', description: 'Ração do cachorro', amount: -199.99 },
  { id: '6', description: 'Ida ao cinema', amount: -54.78 },
  { id: '7', description: 'Freela', amount: 1600.00 },
  { id: '8', description: 'Contas de luz', amount: -252.91 },
  { id: '9', description: 'Conta de água', amount: -80 }
];

const renderTransaction: ListRenderItem<Transaction> = ({ item }) => {
  return (
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
  )
}

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

      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={renderTransaction}
      />
    </View>
  );
}


