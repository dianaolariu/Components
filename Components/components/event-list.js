import React, { Component } from 'react';
import { StyleSheet,TouchableOpacity,Alert, Text,View, Linking, Button} from 'react-native';


export default class EventList extends Component {

    render() {
        return (   
            <View style = {styles.container}>
                <View style={{ backgroundColor: 'green', alignContent: 'space-between', padding: 20,}}>
                <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
                    <Text style = {{ fontSize: 24, color: 'white' }}> 
                        Justin Timberlake
                    </Text>
                    <Button title="yep" onPress= {Alert.alert('Hooo')} ></Button>
                </View>
                <Text style = {{color: 'white',padding: 5}}>Heidelberg, PA 15106 </Text>
                <Text style = {{ color: 'white',}}>Monday, December 10th \n 7.30 PM</Text>
                <Text style = {{ color: 'white', paddingBottom: 40}}>7.30 PM</Text>
                <TouchableOpacity>
                    <Text style={{color: 'white',}}
                            onPress={() => Linking.openURL('http://google.com')}>
                            Invited: RSVP'd: 9 Outside Orders: 0
                    </Text> 
                </TouchableOpacity>  
                </View>
                <View style={{borderWidth: 3, borderColor: 'white'}}>
                    <Text>Featured</Text>
                    <Text>Manage Event</Text> 
                </View>
            </View>      
        )
        }
    }
    
const styles = StyleSheet.create({
    container: {
        //flex: 1,
        flexDirection: 'row',
        alignContent: 'space-between',
       
        marginTop: 60,
        padding: 20,
        
    },
    button: {
        justifyContent:'center',
        backgroundColor:'white',
        height: 80,
        //borderRadius: 2,
        marginTop: 90,
        padding: 20,
      },
    buttonText: {
        color: '#649EBC',
        fontSize: 18,
        alignSelf: 'center',
    },
});