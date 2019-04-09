
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView } from 'react-native';
import OneButton from './OneButtonFile/one-button';
import ProposedPayment from './components/propose-payment';
import ShowingCard from './components/showing-card';
import EmotionControl from './components/emotion-control';
import SelectorControl from './components/selector-control';
import BrokerCard from './components/broker-card';
import CompletedAssist from './components/completed-assist';
import Stars from './components/stars';
import StarRating from './components/star-inverse';
import MainView from './components/main-view';
import HashTag from './components/hashtag';
import Create from './components/component';
import DisputePayment from './components/dispute-payment';


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
        {/* <EmotionControl /> */}
        {/* <ProposedPayment /> */}
        {/* <ShowingCard
          date= 'Wed'
          day = '19'
          time = '12:00 PM'
          logo={require('./assets/logo.png')}
          adress= '1841 S. Calumet #602'
          confirmationLogo={require('./assets/green.png')}
          confirmation= 'Request Confirmed'
          profile={require('./assets/user-profile.png')} 
          name= 'Joe Garcia'/>  */}
          {/* <BrokerCard
            logo={require('./assets/blue2.png')}
            profile={require('./assets/user-profile@3.png')}
            date= 'Wed'
            day = '19'
            time = '12:00 PM'
            camera={require('./assets/camera.png')}
            typeRequest= 'PHOTOSHOOT'
            brokerName= 'Marshall Beck'
            location= '169 W.Huron #1311'
            amount= '$75'/> */}
          {/* <CompletedAssist /> */}
          {/* <MainView /> */}
          {/* <HashTag /> */}
          {/* < Create /> */}
          <DisputePayment />
         
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    //backgroundColor: '#649EBC',
    //padding: 20,
  },
});
