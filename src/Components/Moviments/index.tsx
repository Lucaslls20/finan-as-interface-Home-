import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Movement {
  id: number;
  label: string;
  date: string;
  type: number; // 0 para saída, 1 para entrada
  value: string;
}

interface MovementsProps {
  data: Movement;
}

export default function Movements({ data }: MovementsProps) {
  const [showValue, setShowValue] = useState(false);

  return (
    <TouchableOpacity style={styles.container} onPress={() => setShowValue(true)}>
      <Text style={styles.date}>{data.date}</Text>
      <View style={styles.content}>
        <Text style={styles.label}>{data.label}</Text>
        {showValue ? (
          <Text style={data.type === 1 ? styles.value : styles.expenses}>
            {data.type === 1 ? `R$ ${data.value}` : `R$ -${data.value}`}
          </Text>
        ) : (
          <View style={styles.skeleton} />
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 24,
    borderBottomColor: "#DADADA",
    borderBottomWidth: 0.5,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 2,
    marginBottom: 8,
  },
  date: {
    color: "#DADADA",
    fontWeight: "bold",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color:'#666'
  },
  value: {
    fontSize: 16,
    color: "#2ecc71",
    fontWeight: "bold",
  },
  expenses: {
    fontWeight: "bold",
    color: "#e74c3c",
    fontSize: 16,
  },
  skeleton: {
    marginTop: 6,
    width: 80,
    height: 10,
    backgroundColor: "#DADADA",
    borderRadius: 8,
  },
});
