
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TextInput, View, Alert, Animated,TouchableOpacity, Dimensions, Easing, ScrollView,FlatList, Image,TouchableHighlight } from 'react-native';
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
import Signature from 'react-native-signature-canvas';
import PurpleSlideout from './components/purple-slideout';
import SignatureCapturePage from './components/signature-capture-page';
// import SignatureCapture from '@alanlima/react-native-signature-capture';
import EventList from './components/event-list';




export default class App extends Component<Props> {

  constructor(props){
    super(props);
    this.state = {
      slideoutVisible: true, 
    };
  }
  _onPressButtonOk= () => {
    Alert.alert('Event Confirmed')
  }
  _onPressButtonAt= () => {
    this.foo.myFunc(!this.state.slideoutVisible)
    this.setState({slideoutVisible: !this.state.slideoutVisible, })
  }
  
  getResponse(result){
    result ?
    this.setState({slideoutVisible: true, })
    :
    null
}
  render() {
    return (
      //  {/* <View style={styles.container}> */}
      //   {/* <ScrollView horizontal style={{flexDirection: 'row', marginTop: 100, overflowX: 'auto', }}>
      //     <OneButton 
      //       text='Button 1' 
      //       image={require('./OneButtonFile/icon-house.png')} 
      //       buttonPress={(index) => alert(`${index} was pressed`)}
      //       index={1} />
      //     <OneButton 
      //       text='Button 2' 
      //       image={require('./OneButtonFile/icon-house.png')} 
      //       buttonPress={(index) => alert(`${index} was pressed`)}
      //       index={2} />
      //     <OneButton 
      //       text='Button 3' 
      //       image={require('./OneButtonFile/icon-house.png')} 
      //       buttonPress={(index) => alert(`${index} was pressed`)}
      //       index={3} />
      //     <OneButton 
      //       text='Button 4' 
      //       image={require('./OneButtonFile/icon-house.png')} 
      //       buttonPress={(index) => alert(`${index} was pressed`)}
      //       index={4} />
      //     <OneButton 
      //       text='Button 5' 
      //       image={require('./OneButtonFile/icon-house.png')} 
      //       buttonPress={(index) => alert(`${index} was pressed`)}
      //       index={5} />
      //   </ScrollView> */}
      //   {/* <EmotionControl /> */}
      //   {/* <ProposedPayment /> */}
      //   {/* <ShowingCard
      //     date= 'Wed'
      //     day = '19'
      //     time = '12:00 PM'
      //     logo={require('./assets/logo.png')}
      //     adress= '1841 S. Calumet #602'
      //     confirmationLogo={require('./assets/green.png')}
      //     confirmation= 'Request Confirmed'
      //     profile={require('./assets/user-profile.png')} 
      //     name= 'Joe Garcia'/>  */}
      //   {/* <BrokerCard
      //       logo={require('./assets/blue2.png')}
      //       profile={require('./assets/user-profile@3.png')}
      //       date= 'Wed'
      //       day = '19'
      //       time = '12:00 PM'
      //       camera={require('./assets/camera.png')}
      //       typeRequest= 'PHOTOSHOOT'
      //       brokerName= 'Marshall Beck'
      //       location= '169 W.Huron #1311'
      //       amount= '$75'/> */}
      //     {/* <CompletedAssist /> */}
      //     {/* <MainView /> */}
      //     {/* <HashTag /> */}
      //     {/* < Create /> */}
          // <DisputePayment />
      // {/* </View> */}
      <View style={styles.container}>
        {/* <ZipCode /> */}
      <TouchableOpacity style={styles.closeX} onPress ={this._onPressButtonAt}>
          <Text style={{fontSize: 50, color: 'black', alignSelf: 'center', marginTop: 150, }}>@</Text>
      </TouchableOpacity>
        <PurpleSlideout
        ref={foo => {this.foo = foo;}}
        callback={this.getResponse.bind(this)}
        text="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from
          making it over years old. Richard McClintock, a Latin professor at 
          Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, 
          consectetur, from a Lorem Ipsum passage, and going through the cites of the word in
          classical literature, discovered the undoubtable source. Lorem Ipsum comes from 
          sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of
          Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory 
          ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem 
          ipsum dolor sit amet..', comes from a line in section 1.10.32.
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced below 
          for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum 
          et Malorum' by Cicero are also reproduced in their exact original form, 
          accompanied by English versions from the 1914 translation by H. Rackham.
          It is a long established fact that a reader will be distracted by the readable 
          content of a page when looking at its layout. The point of using Lorem Ipsum is 
          that it has a more-or-less normal distribution of letters, as opposed to using 
          'Content here, content here', making it look like readable English. Many desktop 
          publishing packages and web page editors now use Lorem Ipsum as their default model 
          text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
          Various versions have evolved over the years, sometimes by accident, sometimes on 
          purpose (injected humour and the like).
          There are many variations of passages of Lorem Ipsum available, but the majority have
          suffered alteration in some form, by injected humour, or randomised words which don't 
          look even slightly believable. If you are going to use a passage of Lorem Ipsum, you
          need to be sure there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as 
          necessary, making this the first true generator on the Internet. It uses a dictionary
          over 200 Latin words, combined with a handful of model sentence structures, to generate
          Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free 
          m repetition, injected humour, or non-characteristic words etc." confirm = {this._onPressButtonOk} />      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    //flexDirection: "column",
    //transform: [{ rotate: '270deg'}]
    //backgroundColor: '#649EBC',
    //padding: 20,
  },
});
