import React, { useRef } from "react";
import { StyleSheet, Text, View } from "react-native";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Home from "./Component/Home";

export default function App() {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: "#393939",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
});
