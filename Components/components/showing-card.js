import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View, Image } from 'react-native';

class ShowingCard extends React.Component {
   showAlert(){
        alert('ha')
   }
    render() {
        const { date, adress, confirmation, profile, image, text, } = this.props;
            return (     
                   <View style={styles.button}>
                        <View style={styles.buttonUp}>
                            <View style={styles.buttonUpLeft}>
                                <Text style={styles.buttonText}>Wed 19 12:00 PM</Text>
                            </View>
                            <View style={styles.buttonUpRight}>
                                <Image style={styles.imageS} source={require('../assets/logo.png')} />
                                <Text style={styles.buttonAdress}>1841 S. Calumet #602</Text>
                            </View>
                        </View>
                        <View style={styles.buttonDown}>
                            <Image style={styles.imageG} source={require('../assets/green.png')} />
                            <Text style={styles.buttonText}>Request Confirmed</Text>
                            <Image style={styles.imageX} source={require('../assets/green.png')} />
                            <Text style={styles.buttonText}>Joe Garcia</Text>
                        </View>
                    </View>        

            )
    }
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: 'white',
        height: 180,
        width: 340,
        borderRadius: 20,
      },
      buttonUp: {
        flexDirection: 'row', 
        alignItems: 'center', 
        borderWidth: 1,
        borderColor: 'grey',
        height: 130,
        width: 340,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        justifyContent: 'center'
      },
      buttonUpLeft: { 
        alignItems: 'center', 
        height: 130,
        width: 110,
        borderTopLeftRadius: 20,
        justifyContent: 'center'
      },
      buttonUpRight: {
        alignItems: 'center',  
        borderWidth: 1,
        borderColor: 'grey',
        height: 130,
        width: 230,
        borderTopRightRadius: 20,
      },
      buttonDown: {
        flexDirection: 'row', 
        alignItems: 'center', 
        height: 50,
        width: 340,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius:20,
      },
    
    imageS: {
        marginLeft: -33,
        paddingTop: 5,
        height: 35,
        width: '85%',
        resizeMode: 'stretch',
    },
    buttonAdress: {
        marginBottom: 4,
        marginRight: 20,
        paddingTop: 4,
        fontSize: 18,
        padding: 10,
        paddingTop: 20,
    },
    imageG: {
        borderRadius:10, 
    },
});
export default  ShowingCard;
// require('./two.png')
//style={styles.button} 