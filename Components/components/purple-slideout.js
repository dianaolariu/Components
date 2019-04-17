import React, { Component } from 'react';
import { Alert, StyleSheet, View, Text, ScrollView, TouchableOpacity, Animated, Easing, Dimensions } from 'react-native';



var { width } = Dimensions.get('window');

export default class PurpleSlideout extends Component {
    constructor(props){ 
        super(props);
        this.state = {
            xValue: new Animated.Value(width),
        }
    }

    componentWillMount(){
        //this._move(true);
    }

    _move = (visible) => {
        Animated.timing(this.state.xValue, {
            toValue: visible ? width : 0,
            duration: 300,
            asing: Easing.linear,
        }).start(() => this.props.callback(visible));
        //this.setState({ visible: 0, });
       }
    myFunc(newState) {
        this._move(newState);
    }
    render() {
        const {text, confirm, move } = this.props;
        return (
                <Animated.View style={[styles.containerAnimation, {marginLeft: this.state.xValue}]} >
                    <TouchableOpacity style={styles.closeX} onPress={() => this._move(true)}>  
                        <Text style={styles.textX}>X</Text>
                    </TouchableOpacity>
                    <ScrollView style={{backgroundColor: '#7a4696'}}>
                        <Text style={styles.pageText}>
                            {text}
                        </Text>    
                    </ScrollView>
                    <TouchableOpacity style={styles.confirm} onPress={confirm}>
                        <Text style={styles.textOk}>OK</Text> 
                    </TouchableOpacity>
                </Animated.View>
  
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        top: 0, 
        bottom: 0,  
        right: 0,
        backgroundColor: '#7a4696',
    },
    containerAnimation: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#7a4696', 
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
        marginBottom: 20,
        alignItems: 'center',
    },
    textOk: {
        color: 'white',
        fontSize: 24,
        marginTop: 10,
        justifyContent: 'center',
    },
});

