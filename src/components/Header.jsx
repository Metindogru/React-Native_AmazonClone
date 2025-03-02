import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Feather, AntDesign, Entypo } from "@expo/vector-icons";

const Header = () => {
  return (
    <LinearGradient
      colors={["#4facfe", "#00d4ff", "#00dffe"]}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    >
      <View style={styles.inputBox}>
        <View style={styles.row}>
          <Feather name="search" size={24} color="black" />
          <TextInput
            placeholder="Search Amazon"
            placeholderTextColor={"#000"}
            style={styles.input}
          />
        </View>
        <AntDesign name="scan1" size={24} color="black" />
      </View>
      <Entypo name="mic" size={24} color="black" />
    </LinearGradient>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#a1bcc0",
    backgroundColor: "#fff",
    borderWidth: 1,
    width: "92%",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  input: { padding: 10 },
  row: { flexDirection: "row", alignItems: "center" },
});
