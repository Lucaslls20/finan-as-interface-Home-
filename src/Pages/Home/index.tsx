import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Header from "../../Components/Header";
import Balence from "../../Components/Balence";
import Movements from "../../Components/Moviments";
import Action from "../../Components/Actions";

interface Movement {
  id: number;
  label: string;
  date: string;
  type: number; // 0 ou 1 para indicar entrada/saída
  value: string;
}

const list: Movement[] = [
  { id: 1, label: "Boleto da luz", date: "17/09/2024", type: 0, value: "2500,00" },
  { id: 2, label: "Boleto do gás", date: "17/10/2024", type: 1, value: "15000,00" },
  { id: 3, label: "Boleto da água", date: "17/11/2024", type: 1, value: "7000,00" },
  { id: 4, label: "Boleto da escola", date: "17/11/2024", type: 0, value: "250,00" },
 { id: 5, label: "Boleto do Tênis", date: "27/11/2024", type: 0, value: "700,00" },
  { id: 6, label: "Boleto do Carro", date: "27/11/2024", type: 0, value: "1500,00" },
  { id: 7, label: "Boleto do Tênis", date: "27/11/2024", type: 1, value: "700,00" },
  { id: 8, label: "Boleto das tarefas", date: "27/11/2024", type: 1, value: "1000,00" },
];

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Lucas Silva" />
      <Balence saldo="2000" gastos="1200" />
      <Action />
      <Text style={styles.title}>Últimas movimentações</Text>
      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Movements data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 14,
    marginVertical: 14,
    color:'#777',
  },
  list: {
    marginHorizontal: 14,
  },
});
