import React, { Component } from 'react';
import { StyleSheet, Animated, View, ScrollView, TouchableOpacity, Text, Easing, Dimensions, } from 'react-native';
import SignatureCapturePage from '../components/signature-capture-page';


var { width } = Dimensions.get('window');

export default class PurpleSlideout extends Component {
    constructor(props){ 
        super(props);
        this.state = {
            xValue: new Animated.Value(width),
        }
    }

    _move = (visible) => {
        Animated.timing(this.state.xValue, {
            toValue: visible ? width : 0,
            duration: 300,
            easing: Easing.linear,
        }).start(() => this.props.callback(visible));
       }

    myFunc(newState) {
        this._move(newState);
    }
    
    render() {
        const {text, confirm,} = this.props;
        return (
            <Animated.View style={[styles.container, {marginLeft: this.state.xValue}]} >
                <View style={styles.containerTop}>
                    <TouchableOpacity onPress={() => this._move(true)}>  
                        <Text style ={{color: 'white', fontSize: 24, paddingLeft: 10}}>X</Text>
                    </TouchableOpacity>
                </View>
                    <ScrollView style={[styles.containerMiddle, {backgroundColor: '#7a4696'}]}>
                        <Text style={styles.pageText}>
                            {text}
                        </Text>
                        <SignatureCapturePage /> 
                    </ScrollView>
                    <View style={styles.containerBottom}>
                    <TouchableOpacity onPress={confirm}>
                        <Text style ={{color: 'white', fontSize: 24}}>OK</Text> 
                    </TouchableOpacity>
                    </View>
            </Animated.View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#7a4696',
        width: 380,
        height: 740,
        position: 'absolute',
        // top: 0, 
        // bottom: 0,  
         //right: 0,   
    },
    containerTop: {
        flex:0.07,
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: '#7a4696',
    },
    containerMiddle: {
        flex:0.83,
        backgroundColor: '#7a4696',
    },
    containerBottom: {
        flex:0.10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#7a4696',
    },
    pageText: {
        textAlign: 'left',
        paddingLeft: 20,
        paddingRight: 35,
        paddingTop: 10,
        fontSize: 18,
        color: 'white',
    },  
});

