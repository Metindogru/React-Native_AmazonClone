import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Octicons, SimpleLineIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const SubHeader = () => {
  return (
    <LinearGradient colors={["#4facfe", "#00d4ff", "#00dffe"]}>
      <TouchableOpacity>
        <View style={styles.container}>
          <Octicons name="location" size={20} color="black" />
          <Text style={styles.details}>Deliver to Turkey - 234228</Text>
          <SimpleLineIcons name="arrow-down" size={13} color="black" />
        </View>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default SubHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 5,
    padding: 15,
    alignItems: "center",
  },
  details: { fontSize: 15 },
});
