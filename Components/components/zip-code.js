import React, { Component } from 'react';
import { StyleSheet,TouchableOpacity,View,Alert, Text,} from 'react-native';
import axios from 'axios';
import Single from '../components/single';

const zipcodes = require('zipcodes');
export default class ZipCode extends Component {
    constructor(props) {
        super(props);
        this.state = {
           zipcodesList : []
        }
    }
    // componentDitMount() {
    //     // const url = 'https://newsapi.org/v2/top-headlines?' +
    //     // 'country=us&' +
    //     // 'apiKey=e705379224a443f4a768fad418d33eea';
    //     const url = require('zipcodes');
    //     axios.get(url)
    //         .then((response) => {
    //             this.setState({
    //                 zipcodes: response.zipcodes.lookup(90210);
    //                 //zipcodes: response.data.articles
    //             });
    //         })
    // }
   
    // renderItems() {
    //     return this.state.zipcodes.map((item) => {
    //         <Single key={item.url} item={item} />
    //     })

    // }
    render() {
        return ( 
            
            
                <View style={styles.container}>
                {this.renderItems()}
                </View>
                
        )
        }
    }
    
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        justifyContent:'center',
        backgroundColor:'white',
        height: 40,
        borderRadius: 2,
        marginTop: 90,
    },
    button: {
        justifyContent:'center',
        backgroundColor:'white',
        height: 40,
        borderRadius: 2,
        marginTop: 90,
      },
    buttonText: {
        color: '#649EBC',
        fontSize: 18,
        alignSelf: 'center',
    },
});