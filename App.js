import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
//  To bring contains below Status Bar
import Constants from "expo-constants";
import Home from "./screens/Home";

export default function App() {
  return (
    // <View style={styles.container}>
    <View style={container}>
      <Text> 1. Hello from App.js </Text>
      <StatusBar style="auto" />
      <Home />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // type colorpicker in google and select your prefer color
//     backgroundColor: "#7ecc98",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

// OR Simply do like this

const container = {
  flex: 1,
  // type colorpicker in google and select your prefer color
  backgroundColor: "#7ecfff",
  alignItems: "center",
  justifyContent: "center",
  //  To bring contains below Status Bar
  marginTop: Constants.statusBarHeight,
  // marginTop: 45,
};
