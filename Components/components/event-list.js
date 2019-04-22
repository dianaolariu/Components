import React, { Component } from 'react';
import { StyleSheet,TouchableOpacity,Alert,Image, Text,View, Linking, Button, ScrollView} from 'react-native';


export default class EventList extends Component {

    render() {
        return (   
                <View style={{flex:1, flexDirection: 'row', height:150, margin: 1}}>
                    <View style={{flex:0.75,flexDirection: 'column', alignItems: 'stretch', backgroundColor: '#78c6ba',paddingLeft: 10,}}>
                        <View style={{flex:0.25,flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#78c6ba'}}>
                            <Text style={{color: 'white', fontSize: 20}}>Carles Javierre Petit</Text>
                            <TouchableOpacity>
                                <Text style={{paddingRight:10, color: '#feba16'}}>X</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{flex:0.50,flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'flex-start', backgroundColor: '#78c6ba'}}>
                            <Text style={{color: 'white'}}>Heidelberg, PA 15106 </Text>
                            <Text style={{color: 'white'}}>Monday, December 10th - 7.30 PM</Text>
                        </View>
                        <View style={{flex:0.25, flexDirection: 'row', alignItems: 'flex-end', backgroundColor: '#78c6ba'}}>
                            <TouchableOpacity>
                                <Text style={{color: 'white'}}
                                    onPress={() => Linking.openURL('http://google.com')}>
                                    Invited: RSVP'd: 9 Outside Orders: 0
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ flex: 0.25, flexDirection: 'column', padding: 0, marginLeft: 0,}}>
                        <ScrollView horizontal={true}>
                            <View style={{ flex: 1, flexDirection: 'column',}}>
                                <TouchableOpacity style={{ flex: 0.5, padding: 15, marginLeft: 2, marginBottom: 1, backgroundColor: '#feba16', justifyContent: 'center', alignItems: 'center',}}>
                                    <Text style={{color: 'white'}}>Feature1</Text>
                                    <Image style={{ width: 30, height: 30,}} resize='contain' source={require('../assets/white-star.psd')} />
                                </TouchableOpacity>
                                <TouchableOpacity style={{ flex: 0.5, padding: 15, marginLeft: 2,marginTop: 1, backgroundColor: '#feba16', justifyContent: 'center', alignItems: 'center',}}>
                                    <Text style={{color: 'white'}}>Feature2</Text>
                                    <Image style={{ width: 30, height: 30,}} resize='contain' source={require('../assets/white-star.psd')} />    
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>
                </View>   
        )
    }
}
    
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignContent: 'space-between',
        marginTop: 60,
        padding: 20,
        
    },
});