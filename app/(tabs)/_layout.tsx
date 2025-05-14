import FontAwesome from "@expo/vector-icons/FontAwesome"
import { Tabs } from "expo-router"

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: '#2C5F30'}}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Início',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />
        }}
      />
      <Tabs.Screen
        name="transactions"
        options={{
          title: 'Transações',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="money" color={color} />
        }}
      />
    </Tabs>
  )
}

export default TabsLayout