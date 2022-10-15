import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";
import React from "react";

export default function Sem1() {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.mainView}>
        {/* <View style={{ height: 30 }}>
          {indexNo >= 81 && (
            <>
              <Text style={{ color: "#D10000", marginLeft: 40, paddingTop: 6 }}>
                *Please Enter between Index No 1 to 80
              </Text>
            </>
          )}
        </View> */}
        <View style={styles.searchView}>
          {/* <TextInput
            style={styles.searchBar}
            keyboardType="numeric"
            placeholder="Index Number  e.g.25"
            placeholderTextColor="#4F4F4F"
            value={indexNo}
            onChangeText={(e) => {
              setIndexNo(e);
            }}
          />
          <TouchableOpacity style={styles.button} onPress={getUserData}> */}
          <Text style={styles.buttonText}>Index Number {} </Text>
          {/* </TouchableOpacity> */}
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
              <Text style={styles.btGroupText}>Sem 04</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({});
