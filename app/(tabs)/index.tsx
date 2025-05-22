import Button from "@/components/Button";
import TransactionListItem from "@/components/TransactionListItem";
import { TransactionsModal } from "@/components/TransactionsModal";
import { useTransactions } from "@/hooks/useTransactions";
import { globalStyles } from "@/styles/global";
import * as SecureStore from "expo-secure-store";
import { useEffect, useState } from "react";
import { Image, ScrollView, StatusBar, Text, TextInput, View } from "react-native";

export default function Index() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { balance, addTransaction, getLastTransactions } = useTransactions()
  const [identity, setIdentity] = useState<string | null>(null)
  const [nameInput, setNameInput] = useState('')

  const hanldeAddTransaction = (data: { description: string, amount: number, referenceDate: Date }) => {
    addTransaction(data)
    alert('Transação salva com sucesso!')
  }

  useEffect(() => {
    const loadIdentity = async () => {
      const value = await SecureStore.getItemAsync('fin-app-id')
      setIdentity(value)
    }
    loadIdentity()
  }, [])

  if (!identity) {
    return (
      <View style={[globalStyles.container, { flex: 1, alignItems: 'center', justifyContent: 'center' }]}>
        <Text style={globalStyles.sectionTitle}>Identifique-se</Text>

        <TextInput
          placeholder="Seu nome..."
          value={nameInput}
          onChangeText={text => setNameInput(text)}
          style={{ marginVertical: 20 }}
        />
        <Button
          title="Entrar"
          onPress={async () => {
            await SecureStore.setItemAsync('fin-app-id', nameInput)
            setIdentity(nameInput)
          }}
        />
      </View>
    )
  }

  return (
    <View style={globalStyles.container}>
      <StatusBar />

      <Image
        source={require('@/assets/images/finance-logo.png')}
        style={globalStyles.logo}
      />

      <Text style={globalStyles.greeting}>
        Olá, {identity || 'visitante'}!
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


