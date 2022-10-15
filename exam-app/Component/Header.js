import { SafeAreaView, StyleSheet, Text, View, Platform } from "react-native";
import React from "react";

const Header = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#1A1919" }}>
      <View style={styles.headerComponent}>
        <Text style={styles.mainHeader}>HNDIT Kegalle 2019</Text>
        <Text style={styles.subHeader}>Exam Results</Text>
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerComponent: {
    backgroundColor: "#1A1919",
    paddingTop: Platform.OS === "android" ? 30 : 0,
  },
  mainHeader: {
    fontSize: 20,
    paddingTop: 30,
    textAlign: "center",
    color: "#fff",
  },
  subHeader: {
    fontSize: 12,
    textAlign: "center",
    color: "#fff",
    marginBottom: 20,
  },
});
