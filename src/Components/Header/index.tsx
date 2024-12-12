import React from "react";
import { View, StyleSheet, StatusBar, TouchableOpacity, Text } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

interface HeaderProps {
  name: string;
}

export default function Header({ name }: HeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.userName}>{name}</Text>
        <TouchableOpacity activeOpacity={0.9} style={styles.buttonUser}>
          <AntDesign name="user" size={27} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#8000ff",
    paddingTop: statusBarHeight,
    paddingBottom: 44,
    paddingHorizontal: 16,
  },
  content: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  userName: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  buttonUser: {
    width: 44,
    height: 44,
    backgroundColor: "rgba(255,255,255,0.5)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 22,
  },
});
