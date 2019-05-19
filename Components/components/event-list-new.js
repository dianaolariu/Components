import React, { Component } from 'react';
import { StyleSheet,TouchableOpacity, Image, Text,View, Linking, ScrollView, Alert} from 'react-native';
import EventsNew from './events-new.js';

const styles = StyleSheet.create({
    container: {
        // flex:0.35,
        // flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        alignContent:'flex-end',
       
        // width: 200,
        // height: 40,   
        // position: 'absolute'  
    }, 
    containerButton: {
        //flex:0.15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end',
        //borderWidth: 2,
        borderRadius: 50,
        backgroundColor:'#6257EC',
        width: 200,
        height: 40,
        margin: 15,
        //position: 'absolute'  
    }, 
  });
export default class EventList extends Component {
    constructor(props) {
        super(props);
    };

    // onPress = () => {
    //     this.setState({
    //         image: require('../assets/done.jpg'),
    //         slideoutInvisible: true,
    //     })
    // }

    render() {
        return (
            <View style={{flex:1, flexDirection: 'column', backgroundColor: 'white',}}> 
                <ScrollView>
                    <EventsNew  name="Karen’s Wine Tasting"
                                time='6:00pm'
                                date='Saturday, May 11th' 
                                address1='400 South Main St'
                                address2='Ipswich, MA 01938'
                                index={1}
                    />
                    <EventsNew  name="Karen’s Wine Tasting"
                                time='6:00pm'
                                date='Saturday, May 11th' 
                                address1='400 South Main St'
                                address2='Ipswich, MA 01938'
                                index={2}
                    />
                    <EventsNew  name="Karen’s Wine Tasting"
                            time='6:00pm'
                            date='Saturday, May 11th' 
                            address1='400 South Main St'
                            address2='Ipswich, MA 01938'
                            index={3}
                    />
                    <EventsNew  name="Karen’s Wine Tasting"
                            time='6:00pm'
                            date='Saturday, May 11th' 
                            address1='400 South Main St'
                            address2='Ipswich, MA 01938'
                            index={4}
                    />
                    <EventsNew  name="Karen’s Wine Tasting"
                            time='6:00pm'
                            date='Saturday, May 11th' 
                            address1='400 South Main St'
                            address2='Ipswich, MA 01938'
                            index={5}
                    />
                    <EventsNew  name="Karen’s Wine Tasting"
                            time='6:00pm'
                            date='Saturday, May 11th' 
                            address1='400 South Main St'
                            address2='Ipswich, MA 01938'
                            index={6}
                    />
                    <EventsNew  name="Karen’s Wine Tasting"
                            time='6:00pm'
                            date='Saturday, May 11th' 
                            address1='400 South Main St'
                            address2='Ipswich, MA 01938'
                            index={7}
                    />
                </ScrollView>
                <View
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: 1,
                      
                    }}
                    />
                 <View style={styles.container}>
                    <TouchableOpacity style={styles.containerButton}>
                            <Text style={{fontSize: 16 , color: 'white', textAlign: 'center', fontWeight: 'bold',}}>
                                Create Event
                            </Text>
                    </TouchableOpacity> 
                </View> 
            </View>
        )
    }
}
    
