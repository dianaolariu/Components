import React, { Component } from 'react';
import { StyleSheet,TouchableOpacity,Alert, Text,View} from 'react-native';


export default class EventList extends Component {
    constructor(props) {
        super(props);    
    }
    
    render() {
        return (    
            <View>
                <TouchableOpacity>
                    <Text style= {{marginLeft: 890, marginTop: 60, borderRadius: 50,width: 440, height:120,  borderWidth: 2}}> >

                    </Text>
                </TouchableOpacity>
                <Text>Select an event</Text>
                <TouchableOpacity onPress={() => Alert.alert(text=`Dispute Payment \n `, `Please call our customer service toll free number for any disputes.1-800-311-2605`)} style={styles.button}>
                    <Text style={styles.buttonText}>Dispute Payment</Text>
                    <Text>...</Text>
                </TouchableOpacity>  
            </View>      
        )
        }
    }
    
const styles = StyleSheet.create({
    button: {
        justifyContent:'center',
        backgroundColor:'white',
        height: 80,
        //borderRadius: 2,
        marginTop: 90,
        padding: 120,
      },
    buttonText: {
        color: '#649EBC',
        fontSize: 18,
        alignSelf: 'center',
    },
});