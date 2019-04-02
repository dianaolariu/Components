import React, { Component } from 'react';
import { StyleSheet, View,TouchableOpacity, Image, Text, ImageBackground, Picker } from 'react-native';
import EmotionControl from '../components/emotion-control';
import RNPickerSelect from 'react-native-picker-select';
import Create from '../components/component';

const categ = [
    {
      label: 'All',
      value: 'All',
    },
    {
      label: 'This Month',
      value: 'This Month',
    },
    {
      label: 'This Week',
      value: 'This Week',
    },
  ];

export default class MainView extends Component {
    render() {
        const placeholder = {
            label: "All",
            value: null,
            color: 'white',
          };
        return (
            <View style={styles.container}>
                <View style={{flexDirection:'row', marginTop: 20,}}>
                    <Image style = {{ width: 60, height: 60,}} source={require('../assets/grafic.png')} resizeMode='contain'/>
                    {/* <View style={{width: 60}}> */}
                        <RNPickerSelect
                            placeholder={placeholder}
                            placeholderTextColor='white'
                            items={categ}
                            onValueChange={value => {
                                this.setState({
                                    newCateg: value,
                                });
                            }}
                            Icon={() => {
                                return (
                                    <View
                                        style={{
                                            backgroundColor: 'transparent',
                                            borderTopWidth: 10,
                                            borderTopColor: 'white',
                                            borderRightWidth: 10,
                                            borderRightColor: 'transparent',
                                            borderLeftWidth: 10,
                                            borderLeftColor: 'transparent',
                                            width: 0,
                                            height: 0,
                                        }}
                                    />
                                );
                            }}
                        />
                    {/* </View> */}
                    <EmotionControl />
                </View>
                <Create />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        //justifyContent: 'center',
        paddingHorizontal: 10,
        flex:1,
    },
});
const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
      fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 4,
      color: 'black',
      paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
      fontSize: 16,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 0.5,
      
      borderRadius: 8,
      color: 'black',
      paddingRight: 30, // to ensure the text is never behind the icon
    },
  }); 