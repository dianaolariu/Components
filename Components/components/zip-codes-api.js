import React, { Component } from 'react';
import {Text, View,} from 'react-native';
import axios from 'axios';

export default class ZipCodesApi extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            formatted_address: null,
        }
    }
    
    componentDidMount() {
        const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${this.props.formatted_address}&key=AIzaSyCJYZuEzGbd36ZL6eVENM9kb7Q4ZSdw-70`
        axios.get(url)
        .then(response => {
            places = response.data.results[0].formatted_address
            places2 = places.search(this.props.formatted_address)
            places3 = places.slice(0,places2)+this.props.formatted_address
            console.log(places2)
            this.setState({ formatted_address: places3,
            })  
        })
        .catch(error => {
          console.log(error);
        });  
    }
    render() {
        return (
            <View>
                <Text style={{color: 'white'}}>{this.state.formatted_address}</Text>
            </View>    
        );
    }
}


