import React, { Component } from 'react';
import { Alert, StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';

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
            this.state.status ?
                <View style={styles.container}>
                    <TouchableOpacity style={styles.closeX} onPress={this._onPressButton}>  
                        <Text style={styles.textX}>X</Text>
                    </TouchableOpacity>
                    <ScrollView>
                        <Text style={styles.pageText}>
                        {text}
                        </Text>    
                    </ScrollView>
                    <TouchableOpacity style={styles.confirm} onPress={this._onPressButtonOk}>
                        <Text style={styles.textOk}>OK</Text> 
                    </TouchableOpacity>
                </View> : null   
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7a4696'
    
    },
    closeX: {
        marginTop: 30,
        marginLeft: 10,
        width: 40,
        backgroundColor: '#7a4696',
    },
    textX: {
        color: 'white',
        fontSize: 24,
        marginBottom: 1,
    },
    pageText: {
        textAlign: 'left',
        marginLeft: 20,
        marginRight: 30,
        fontSize: 18,
        color: 'white',
    },
    confirm: {
        position: 'relative',
        flexDirection: 'row',
        fontSize: 60,
        justifyContent: 'space-around',
        marginBottom: 30,
        marginTop: 10
    },
    textOk: {
        color: 'white',
        fontSize: 24,
        marginTop: 10
    },
});

