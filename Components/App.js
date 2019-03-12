
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView } from 'react-native';
import OneButton from './OneButtonFile/one-button';
import ProposedPayment from './components/propose-payment';
import ShowingCard from './components/showing-card';
import EmotionControl from './components/emotion-control';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        {/* <ScrollView horizontal style={{flexDirection: 'row', marginTop: 100, overflowX: 'auto', }}>
          <OneButton 
            text='Button 1' 
            image={require('./OneButtonFile/icon-house.png')} 
            buttonPress={(index) => alert(`${index} was pressed`)}
            index={1} />
          <OneButton 
            text='Button 2' 
            image={require('./OneButtonFile/icon-house.png')} 
            buttonPress={(index) => alert(`${index} was pressed`)}
            index={2} />
          <OneButton 
            text='Button 3' 
            image={require('./OneButtonFile/icon-house.png')} 
            buttonPress={(index) => alert(`${index} was pressed`)}
            index={3} />
          <OneButton 
            text='Button 4' 
            image={require('./OneButtonFile/icon-house.png')} 
            buttonPress={(index) => alert(`${index} was pressed`)}
            index={4} />
          <OneButton 
            text='Button 5' 
            image={require('./OneButtonFile/icon-house.png')} 
            buttonPress={(index) => alert(`${index} was pressed`)}
            index={5} />
        </ScrollView> */}
        {/* <ProposedPayment /> */}
        
          {/* <ShowingCard
            date= 'Wed 19 12:00 PM'
            logo={require('./assets/logo.png')}
            adress= '1841 S. Calumet #602'
            confirmationLogo={require('./assets/green.png')}
            confirmation= 'Request Confirmed'
            profile={require('./assets/green.png')} 
            name= 'Joe Garcia'/>  */}
          <EmotionControl />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#649EBC',
    //padding: 20,
  },
});
