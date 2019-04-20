import React, { Component } from 'react';
import {Text, View,} from 'react-native';
import axios from 'axios';

export default class ZipCodesApi extends Component {
    constructor(props) {
        super(props);
        this.state = { 
        places: [{}],
        }
    }
   
    componentDidMount() {
        axios.get('https://maps.googleapis.com/maps/api/geocode/json?address=60651&key=AIzaSyCJYZuEzGbd36ZL6eVENM9kb7Q4ZSdw-70')
        .then(response => {
        //   this.setState({ places: response.data})
            tmp = response.data.results[0].address_components.filter(
                (item) => {
                    return (item.types[0] == 'locality' || item.types[0] == 'administrative_area_level_1')
                }
            )
            this.setState({ places: tmp, 
            })  
        })
        .catch(error => {
          console.log(error);
        });
     
    }
    // renderItem=(data)=>
    //     <Text>{data.long_name}</Text>
    
    render() {
        return (
            <View>
                 {/* <Text>{this.state.places[0].long_name}</Text> */}
                {   
                this.state.places.map((place) =>
                    {
                        //if(this.state.places[0].types == 'postal_code'){
                            return (
                              
                                <View >
                                    <Text>{place.long_name}</Text>
                                </View> 
                            );
                        //}
                    }
                )
                }
            </View>    
        );
    }
}


