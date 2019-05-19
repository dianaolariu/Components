import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Button from "../button/Button";
import fonts from "../../../theme/fonts";
import { ScrollView } from "react-native-gesture-handler";


const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "white",
    width: '100%',
  },
//   containerName: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     backgroundColor: "#E8E7F6",
//     padding: 15,
//   },
  info1: {
    flexDirection: "row",
    padding: 15,
    alignItems: 'center',
  },
  infoText1: {
    fontSize: 18,
    fontFamily: fonts.sansBold,
    marginLeft: 6,
    color: '#52439B'
  },
  info2: {
   
    flexDirection: "column",
    padding: 15,
  },
  info3: {
    flexDirection: "row",
    padding: 5,

  },
  infoText: {
    fontSize: 16,
    fontFamily: fonts.sansRegular,
    marginLeft: 6,
  },
  button1: {
    width: '54%',
    borderWidth: 2,
    borderColor: "#6257ec",
    marginLeft: 50,
  },
  button: {
    width: '60%',
    alignSelf: 'center',
  },
});

const GuestCard = props => {
  const { name, time, date, address1, address2 } = props;
  return (
    <View style={styles.container}>
      {/* <View style={styles.containerName}>
        <Text
          style={{
            color: "#52439B",
            fontSize: 18,
            fontFamily: fonts.sansBold,
          }}
        > Event Volume </Text>
        <Text
          style={{
            color: "#52439B",
            fontSize: 18,
            fontFamily: fonts.sansBold,
          }}
        > $470.13 </Text>
      </View> */}
      <ScrollView>
      <View style={styles.info1}>
        <View style={{height: 24, width: 24, borderRadius: 50, backgroundColor: '#FEBA16'}} />   
        <Text style={styles.infoText1}>Jason M.</Text>
        <Button
        text="Start Order"
        textColor="#6257ec"
        buttonColor="white"
        style={styles.button1}
      />
      </View>
      <View style={styles.info2}>
        <View style={styles.info3}>
            <View style={{height: 20, width: 20, borderWidth: 1, borderColor: '#999AED'}} /> 
            <Text style={styles.infoText}>Become a wine guide</Text>
        </View>
        <View style={styles.info3}>
            <View style={{height: 20, width: 20, borderWidth: 1, borderColor: '#999AED'}} />
            <Text style={styles.infoText}>Host a Tasting</Text>
        </View>
      </View>
      <View style={styles.info1}>
        <View style={{height: 24, width: 24, borderRadius: 50, backgroundColor: '#FEBA16'}} />   
        <Text style={styles.infoText1}>Jason M.</Text>
        <Button
        text="Start Order"
        textColor="#6257ec"
        buttonColor="white"
        style={styles.button1}
      />
      </View>
      <View style={styles.info2}>
        <View style={styles.info3}>
            <View style={{height: 20, width: 20, borderWidth: 1, borderColor: '#999AED'}} /> 
            <Text style={styles.infoText}>Become a wine guide</Text>
        </View>
        <View style={styles.info3}>
            <View style={{height: 20, width: 20, borderWidth: 1, borderColor: '#999AED'}} />
            <Text style={styles.infoText}>Host a Tasting</Text>
        </View>
      </View>
      </ScrollView>
      {/* <Button
        text="Create event"
        textColor="white"
        style={styles.button}
        /> */}
    </View>
  );
};
export default GuestCard;
