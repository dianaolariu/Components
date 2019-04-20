
import React, { Component } from 'react';
 
import { StyleSheet, View, Button, Alert, TextInput } from 'react-native';
 
var zipcodes = require('zipcodes');
 
export default class ZipCode extends Component {
 
    constructor(props) {
        super(props)
        this.state = {
           Holder: '' 
        }
    }
 
  AddItemsToArray=()=>{
    const hills = zipcodes.lookup(902100);
      //Adding Items To Array.
      hills.push( this.state.Holder.toString() );
 
      // Showing the complete Array on Screen Using Alert.
      //Alert.alert(zipcodes.toString());
 
  }
 
 render() {
 
   return (
 
      <View style={styles.MainContainer}>
          <Button title="Click Here To Add Value To Array" onPress={this.AddItemsToArray} />
          
      </View>
 
        
   );
 }
}
 
const styles = StyleSheet.create({
 
  MainContainer :{
 
    flex:1,
    justifyContent: 'center',
    margin: 15
 
  }
 
});