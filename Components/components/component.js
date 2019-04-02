import React, { Component } from 'react';
import { View, TextInput, Text} from 'react-native';
import HashTag from '../components/hashtag';


export default class Create extends Component {
    constructor(props){
      super(props);
      this.state = { 
        tags: ['the love of my life', 'stuff', 'pie', 'things', 'babies',],
       };
    }

    render() {
        return(
          <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#f2f9f5'}}>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignContent: 'flex-start'}}>
            { this.state.tags.map((item) => ( <HashTag text={item} style={{ margin: 5, }} /> ))} 
            </View>
          </View>
        )
    }
}
