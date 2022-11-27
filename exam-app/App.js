import React, { useRef } from "react";
import { StyleSheet, Text, View } from "react-native";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Home from "./Component/Home";
import Sem1 from "./Component/Sem1";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <> <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Header" component={Header} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Footer" component={Footer} />
        <Stack.Screen name="Sem1" component={Sem1} />
        {/* <Header />
        <Home />
        <Footer /> */}
      </Stack.Navigator>
    </NavigationContainer>
      
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
