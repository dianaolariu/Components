/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import OneButton from './components/one-button';
import EightButton from './components/eight-button';
import ShowingCard from './components/showing-card';
import DateTime from './components/date-picker';
import DateTimePickerTester from './components/date-try';
import ProposedPayment from './components/propose-payment';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {


  render() {
    return (
      <View style={styles.container}>
        {/* <OneButton /> */}
        {/* <EightButton /> */}
        {/* <ShowingCard /> */}
        <ProposedPayment />
        {/* <DateTime />  */}
        {/* <DateTimePickerTester /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#649EBC',
    flexDirection: 'row',
  },
});
