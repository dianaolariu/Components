import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View, Image } from 'react-native';

class OneButton extends React.Component {
   showAlert(){
        alert('ha')
   }
    render() {
        const { image, text, onPress } = this.props;
            return (
                <View style={[this.props.style, styles.wrap]}>      
                   <TouchableOpacity onPress = {onPress} style={styles.button} >
                        <Image style={styles.imageX} source={image} />
                        <Text style={styles.buttonText}>{text}</Text>
                    </TouchableOpacity>        
                </View>
            )
    }
}
const styles = StyleSheet.create({
    wrap: {
        flex: 1,
  	    paddingHorizontal: 10,
  	    flexDirection: 'row',
    },
    button: {
        flexDirection: 'row', 
        alignItems: 'center', 
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: '#fff',
        height: 40,
        //width: 140,
        borderRadius: 5,
        margin: 5,
        justifyContent: 'space-between'
      },
    imageX: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
    },
    buttonText: {
        color: '#fff',
        marginBottom: 4,
        marginRight: 20,
        paddingTop: 4,
        fontSize: 18,
    },
});

export default  OneButton;
// require('./two.png')