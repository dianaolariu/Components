import React, { Component} from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

export default class ZipCodeApiReviewTwo extends Component {
    constructor(props) {
        super(props);
        this.state= {
            places: [{}]
        }
    }

    componentDidMount() {
        axios.get('https://maps.googleapis.com/maps/api/geocode/json?address=60651&key=AIzaSyCJYZuEzGbd36ZL6eVENM9kb7Q4ZSdw-70')
        .then(response => {
            tmp = response.data.results[0].address_components.filter(
                (item) => {
                    return (item.types[0] == 'locality' || item.types[0] == 'administrative_area_level_1')
                }
            )
            this.setState({places:tmp})
        })
        .catch(error => {
            console.log(error);
          });
    }

    render() {
        return(
            <View>
                { this.state.places.map(
                     (place) => {
                        return(
                            <View>
                                <Text style={{ marginTop: 10, marginLeft: 30, color: 'black'}}>{place.short_name}</Text>
                            </View>
                            )
                        }
                    )
                }
            </View>
        )
    }
}
