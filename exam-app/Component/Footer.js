import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Footer = () => {
  return (
    <View style={styles.footerView}>
      <Text style={styles.textStyle}>Developed By CKP</Text>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footerView: {
    backgroundColor: "#1A1919",
  },
  textStyle: {
    color: "#fff",
    textAlign: "center",
    fontSize: 10,
    margin: 4,
  },
});
