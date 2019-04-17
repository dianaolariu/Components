import React, { Component } from 'react';
import { StyleSheet,TouchableOpacity,View,Alert, Text,} from 'react-native';
import axios from 'axios';
import Single from '../components/single';


export default class ZipCode extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: []
        }
    }
    componentDitMount() {
        const url = 'https://newsapi.org/v2/top-headlines?' +
        'country=us&' +
        'apiKey=e705379224a443f4a768fad418d33eea';
        axios.get(url)
            .then((response) => {
                this.setState({
                    news: response.data.articles
                });
            })
    }
   
    renderItems() {
        return this.state.news.map((item) => {
            <Single key={item.url} item={item} />
        })

    }
    render() {
        return ( 
            
            // <TouchableOpacity onPress={() => Alert.alert(text=`Dispute Payment \n `, `Please call our customer service toll free number for any disputes.1-800-311-2605`)} style={styles.button}>
                <View style={styles.container}>
                {this.renderItems()}
                </View>
            // </TouchableOpacity>        
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