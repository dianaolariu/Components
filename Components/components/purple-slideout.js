import React, { Component } from 'react';
import { Alert, AppRegistry, Button, StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';

export default class PurpleSlideout extends Component {
    constructor(){
    super();
    this.state ={
        status:true
    }
    }
    _onPressButton= () => {
        this.setState({status: false})
    }
    _onPressButtonOk= () => {
        Alert.alert('Event Confirmed')
       
   }

    render() {
        const {text} = this.props;
        return (
            
            <View style={styles.container}>
                {this.state.status ?
                 <View style={styles.container}>
                    <View style={styles.container2}>  
                        <Button
                            onPress={this._onPressButton}
                            title="X"
                            color="white"
                        />
                    </View>
                    <ScrollView>
                        <Text style ={{textAlign: 'left', marginLeft: 20, marginRight: 30, fontSize: 18, color: 'white',}}>
                        {text}
                        </Text>    
                    </ScrollView>
                    <View style = {{ position: 'relative',flexDirection: 'row', fontSize: 60, justifyContent: 'space-around', marginBottom: 30, marginTop: 10}}>
                        {/* <Button onPress={this._onPressButton}
                                    title="Close"
                                    color="white" /> */}
                        <Button onPress={this._onPressButtonOk}
                                    title="Ok"
                                    color="white"/>
                    </View>
                </View> : null }
        </View> 
        );
    }
    }

const styles = StyleSheet.create({
  container: {
   flex: 1,
   backgroundColor: '#7a4696'
  },
  container2: {
    marginTop: 40,
    marginLeft: 5,
    width: 40,
    fontSize: 80,
   },
});

