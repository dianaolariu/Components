import React, { Component } from 'react';
import { StyleSheet,TouchableOpacity, Image, Text,View,  ScrollView, Alert, Dimensions} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: 'white',
        paddingLeft: 20,
        height: 265,
        //width:375,
        //alignItems: 'stretch',
    },
    containerName: {
        flex:0.25,
        flexDirection: 'row',
        backgroundColor: '#E8E7F6',
        marginLeft: -20,
        paddingLeft: 20,
    },
    containerDate: {
        flex:0.30,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    containerAddress: {
        flex:0.30,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    containerButton: {
        flex:0.15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        borderWidth: 2,
        borderRadius: 100,
        borderColor:'#6257EC',
        width: 140,
        height: 15,
        margin: 15   
    }, 
  });


export default class EventsNew extends Component {

    render() {
        const {name, time, date, address1, address2, index  } = this.props;
        return (   
            <View style={styles.container} onPress={() => buttonPress(index)}>
                <View style={styles.containerName}>
                    <Text style={{color: '#52439B', fontSize: 18, fontWeight: 'bold', alignSelf: 'center'}}>{name}</Text>
                </View>
                <View style={styles.containerDate}>
                    <Text style={{fontSize: 16 }}>{time}</Text>
                    <Text style={{fontSize: 16 }}>{date}</Text>
                </View>
                <View style={styles.containerAddress}>
                    <Text style={{fontSize: 16 }}>{address1}</Text>
                    <Text style={{fontSize: 16 }}>{address2}</Text>
                </View>
                <TouchableOpacity style={styles.containerButton}>
                        <Text style={{fontSize: 16 , color: '#6257EC', textAlign: 'center', fontWeight: 'bold',}}>
                            Orders
                        </Text>
                </TouchableOpacity>
            </View> 
        )
    }
}
    
