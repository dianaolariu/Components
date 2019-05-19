import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";



const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "white",
    width: '100%',
    height: 70
  },
  containerName: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: "#E8E7F6",
    padding: 20,
  },
  info: {
    flex: 1,
    flexDirection: "column",
    padding: 20,
  },
  infoText: {
    fontSize: 16,
    
  },
  button: {
    width: '50%',
    borderWidth: 2,
    borderColor: "#6257ec",
    marginBottom: 20,
    alignSelf: 'center',
  }
});

const OrderCard = props => {
  const { name, time, date, address1, address2 } = props;
  return (
    <View style={styles.container}>
      <View style={styles.containerName}>
        <Text
          style={{
            color: "#52439B",
            fontSize: 18,
            fontFamily: fonts.sansBold,
          }}
        >
          Event Volume
        </Text>
        <Text  style={{
            color: "#52439B",
            fontSize: 18,
            fontFamily: fonts.sansBold,
          }}>
          $470.13
          </Text>
      </View>
      <View style={styles.containerName}>
        <Text
          style={{
            color: "#52439B",
            fontSize: 18,
            fontFamily: fonts.sansBold,
          }}
        >
          Event Volume
        </Text>
        <Text  style={{
            color: "#52439B",
            fontSize: 18,
            fontFamily: fonts.sansBold,
          }}>
          $470.13
          </Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.infoText}>-</Text>
        <Text style={styles.infoText}>Become a wine Guide</Text>
        <Text style={styles.infoText}>-</Text>
        <Text style={styles.infoText}>Host a Tasting</Text>
      </View>
      <Button
        text="Orders"
        textColor="#6257ec"
        buttonColor="white"
        style={styles.button}
      />
    </View>
  );
};
export default OrderCard;
