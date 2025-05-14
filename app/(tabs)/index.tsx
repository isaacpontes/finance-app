import PrimaryButton from "@/components/PrimaryButton";
import { TransactionsModal } from "@/components/TransactionsModal";
import { globalStyles } from "@/styles/global";
import { Link } from "expo-router";
import { useState } from "react";
import { Image, StatusBar, Text, View } from "react-native";


export default function Index() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const name = "Isaac"

  const hanldeAddTransaction = (data: { description: string, amount: number }) => {
    console.log(data)
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
        R$ 1.529,85
      </Text>

      <View style={globalStyles.buttonsContainer}>
        <PrimaryButton title="Adicionar transação" onPress={() => setIsModalOpen(true)} />
      </View>

      <Text style={globalStyles.sectionTitle}>
        Transações Recentes
      </Text>

      <TransactionsModal
        visible={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={hanldeAddTransaction}
      />

      <View style={{ marginVertical: 20 }}>
        <Link href={"/transactions"} style={{ fontSize: 20 }}>
          Ver transações
        </Link>
      </View>
    </View>
  );
}


