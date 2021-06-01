import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

//View -> UIView / AndroidView
export default function App() {
  let x = 1;
  console.log("App exc");

  return (
    <View style={styles.ccc}>
      <Text>wtfffdssff!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  ccc: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
