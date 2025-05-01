import { Image, Text, View } from "react-native";

const transactions = [
  { id: '1', description: 'Supermercado', amount: -50.75 },
  { id: '2', description: 'Salário', amount: 2500.00 },
  { id: '3', description: 'Restaurante', amount: -120.40 },
  { id: '4', description: 'Aluguel', amount: -800.00 },
];

export default function Index() {
  const name = "Isaac"

  return (
    <View>
      <Image source={require('@/assets/images/finance-logo.png')} />
      <Text>
        Olá, {name}!
      </Text>
      <Text>
        Saldo Atual
      </Text>
      <Text>
        R$ 1.529,85
      </Text>

      <View>
        <Text>
          Adicionar Receita
        </Text>
        <Text>
          Adicionar Despesa
        </Text>
      </View>

      <Text>Transações Recentes</Text>

      {transactions.map(transaction => (
        <View key={transaction.id}>
          <Text>
            {transaction.description}
          </Text>
          <Text>
            R$ {transaction.amount}
          </Text>
        </View>
      ))}
    </View>
  );
}
