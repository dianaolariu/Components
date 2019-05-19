import React, { Component } from 'react';
import { StyleSheet,View, ScrollView, Text, TextInput, Keyboard, TouchableOpacity, KeyboardAvoidingView, Animated } from 'react-native';




export default class CreateNewEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {  firstName: '',
                        lastName: '',
                        email: '',
                        phone: '',
                        addressOne: '',
                        addressTwo: '',
                        zip: ''
                     }
    
    
        //this.handleNameChange = this.handleNameChange.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
      }

    // handleNameChange = (firstName, lastName, email, phone, addressOne, addressTwo, zip) =>{
    //     this.setState({ firstName, lastName, email, phone, addressOne, addressTwo, zip });
    // }
    // handleSubmit() {
    //     saveSettings(this.state);
    // }
    // async componentDidMount() {
    //     const initialState = await loadSettings();
      
    //     this.setState(initialState);
    //   }

    render() {
        return(

            
           
            <KeyboardAvoidingView
                style={styles.container}
                behavior="padding" enabled
            > 
                <View>
                    <Text style={styles.header}>Required Information</Text>
                </View>
                <ScrollView>
                    <View style={styles.inputContainer}>
                        <TextInput
                        style={styles.textInput}
                        placeholder="FIRST NAME"
                        maxLength={20}
                        onBlur={Keyboard.dismiss}
                        value={this.state.firstName}
                        onChangeText={(firstName) => this.setState({firstName})}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                        style={styles.textInput}
                        placeholder="LAST NAME"
                        maxLength={20}
                        onBlur={Keyboard.dismiss}
                        value={this.state.lastName}
                        onChangeText={(lastName) => this.setState({lastName})}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                        style={styles.textInput}
                        placeholder="EMAIL"
                        autoCapitalize={'none'}
                        maxLength={30}
                        onBlur={Keyboard.dismiss}
                        value={this.state.email}
                        onChangeText={(email) => this.setState({email})}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                        style={styles.textInput}
                        placeholder="PHONE (numbers only)"
                        keyboardType="numeric"
                        maxLength={20}
                        onBlur={Keyboard.dismiss}
                        value={this.state.phone}
                        onChangeText={(phone) => this.setState({phone})}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                        style={styles.textInput}
                        placeholder="ADDRESS 1"
                        maxLength={50}
                        //multiline='true'
                        onBlur={Keyboard.dismiss}
                        value={this.state.name}
                        onChangeText={(addressOne) => this.setState({addressOne})}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                        style={styles.textInput}
                        placeholder="ADDRESS 2"
                        maxLength={50}
                        onBlur={Keyboard.dismiss}
                        value={this.state.name}
                        onChangeText={(addressTwo) => this.setState({addressTwo})}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                        style={styles.textInput}
                        placeholder="ZIP"
                        keyboardType="numeric"
                        maxLength={20}
                        onBlur={Keyboard.dismiss}
                        value={this.state.name}
                        onChangeText={(zip) => this.setState({zip})}
                        />
                    </View>
                    <View>
                        <TouchableOpacity  style={[styles.textInput, {justifyContent: 'center'}]} onPress={this.handleSubmit}>
                            <Text style={styles.saveButtonText}>ADD NEW GUEST</Text>
                        </TouchableOpacity>
                    </View>
                    
                </ScrollView>
                <View style={{ height: 70 }} />
            </KeyboardAvoidingView>
        )
     }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 25,
      backgroundColor: '#F5FCFF',
    },
    header: {
      fontSize: 18,
      textAlign: 'center',
      margin: 5,
      fontWeight: 'bold'
    },
    inputContainer: {
        paddingTop: 10
      },
    textInput: {
        // backgroundColor: '#CCCCCC',
        backgroundColor: '#f5f5f5',
        margin: 10,
        height: 40,
        fontSize: 18,
        paddingLeft: 20,
        paddingRight: 20,
      },
      saveButton: {
        borderWidth: 1,
        borderColor: '#007BFF',
        backgroundColor: '#007BFF',
        padding: 15,
        margin: 5
      },
      saveButtonText: {
        fontSize: 20,
        textAlign: 'center',
      },
  });        