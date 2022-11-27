import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  Vibration,
  ActivityIndicator,
} from "react-native";
import axios from "axios";
export default function Home({ navigation }) {
  const [data, setData] = useState([]);
  const [indexNo, setIndexNo] = useState("");

  if (indexNo >= 81) {
    Vibration.vibrate();
  }
  const getUserData = () => {
    if (indexNo === "" || indexNo > 80) {
      Vibration.vibrate();
    }
    if (indexNo !== "" && indexNo < 81) {
      <ActivityIndicator />;
      axios
        .get(`https://results-api.pasindujr.me/api/v1/students/${indexNo}`)
        .then((res) => {
          if (res.status === 200) {
            const fData = res.data.data;
            setData(fData);
          } else {
            throw error;
          }
        });
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.mainView}>
        <View style={{ height: 30 }}>
          {indexNo >= 81 && (
            <>
              <Text style={{ color: "#D10000", marginLeft: 40, paddingTop: 6 }}>
                *Please Enter between Index No 1 to 80
              </Text>
            </>
          )}
        </View>
        <View style={styles.searchView}>
          <TextInput
            style={styles.searchBar}
            keyboardType="numeric"
            placeholder="Index Number  e.g.25"
            placeholderTextColor="#4F4F4F"
            value={indexNo}
            onChangeText={(e) => {
              setIndexNo(e);
            }}
          />
          <TouchableOpacity style={styles.button} onPress={getUserData}>
            <Text style={styles.buttonText}>Search</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.subView}>
          <Text style={styles.title}>Your Details</Text>

          <View style={styles.flatListView}>
            {data.id !== undefined && (
              <>
                <Text style={styles.flatListText}>
                  {`Name :  ${data?.name}`}
                </Text>
                <Text style={styles.flatListText}>
                  {`Register Num :  ${data?.registrationNumber}`}
                </Text>
                <Text style={styles.flatListText}>
                  {`Email :  ${data?.email}`}
                </Text>
                <Text style={styles.flatListText}>
                  {`Birth Year :  ${data?.birthYear}`}
                </Text>
                <Text
                  style={styles.flatListText}
                >{`Overall GPA :  ${data?.gpa}`}</Text>
                <Text
                  style={styles.flatListText}
                >{`Contact No :  ${data?.contactNumber}`}</Text>
              </>
            )}
          </View>

          <View style={styles.cardButtonRow1}>
            <TouchableOpacity style={styles.buttonGroup}>
              <Text style={styles.btGroupText}>Sem 01</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonGroup}>
              <Text style={styles.btGroupText}>Sem 02</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.cardButtonRow2}>
            <TouchableOpacity style={styles.buttonGroup}>
              <Text style={styles.btGroupText}>Sem 03</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonGroup}>
              {/* <Text
                style={styles.btGroupText}
                onPress={() => navigation.navigate("Sem1", { name: "Jane" })}
              >
                Sem 04
              </Text> */}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  mainView: {
    backgroundColor: "#393939",
    flex: 1,
  },
  searchView: {
    marginTop: 50,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  searchBar: {
    marginLeft: 40,
    backgroundColor: "#D9D9D9",
    color: "#4F4F4F",
    width: "50%",
    height: 40,
    textAlign: "center",
    borderRadius: 50,
  },
  button: {
    marginLeft: 17,
    marginRight: 40,
    backgroundColor: "#2369F0",
    width: "24%",
    height: 40,
    borderRadius: 50,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
    margin: Platform.OS === "android" ? 3 : 7,
  },
  subView: {
    backgroundColor: "#535353",
    marginTop: 40,
    marginLeft: 20,
    width: "90%",
    flex: 1,
    borderRadius: 30,
    maxHeight: Platform.OS === "android" ? 580 : 375,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 15,
    color: "#fff",
  },
  cardButtonRow1: {
    flexDirection: "row",
    marginLeft: 5,
    flexWrap: "wrap",
    marginTop: Platform.OS === "android" ? 150 : 0,
  },
  cardButtonRow2: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginLeft: 5,
    bottom: 30,
  },
  buttonGroup: {
    backgroundColor: "#2369F0",
    width: "35%",
    height: "40%",
    borderRadius: 30,
    margin: 22,
  },
  btGroupText: {
    color: "#fff",
    textAlign: "center",
    padding: 3,
  },
  flatListView: {
    marginTop: 10,
    paddingTop: 30,
    paddingRight: 30,
    paddingBottom: 0,
    paddingRight: 30,
    height: 220,
  },
  flatListText: {
    color: "#E9E4D4",
    fontSize: 16,
    paddingLeft: 30,
    paddingTop: Platform.OS === "android" ? 15 : 4,
  },
});
