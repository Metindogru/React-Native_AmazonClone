import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native";
import React from "react";
import RootNavigation from "./src/navigation/RootNavigation";

import { StatusBar } from "react-native";

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#4facfe" }}>
      <StatusBar barStyle={"dark-content"} />
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
