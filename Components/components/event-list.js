import React, { Component } from 'react';
import { StyleSheet,TouchableOpacity, Image, Text,View, Linking, ScrollView, Alert} from 'react-native';
import PurpleSlideout from './purple-slideout';
import EventCard from './event-card.js';

const styles = StyleSheet.create({
  });


export default class EventList extends Component {
    constructor(props) {
        super(props);
        this.state = {image: require('../assets/book.jpg'),
        slideoutInvisible: true}
    };

    // onPress = () => {
    //     this.setState({
    //         image: require('../assets/done.jpg'),
    //         slideoutInvisible: true,
    //     })
    // }
    _onPressButtonOk= () => {
        Alert.alert('Event Confirmed')
    }

    _onPressButtonAt= (newText) => {
        //this.setState({slideoutInvisible: true})  
        this.purpleslideout.myFunc(!this.state.slideoutInvisible, newText)
        // this.setState({slideoutInvisible: !this.state.slideoutInvisible, })

    }
      
    getResponse(result){
        result ?
        this.setState({slideoutInvisible: true, })
        :
        this.setState({slideoutInvisible: false })
    }
    render() {
        return (
            <View style={{flex:1, color:'red'}}>
                <View style={{zIndex:2}}>
                    <TouchableOpacity>
                        <Image style={{ width: 30, height: 30,}}  source={require('../assets/white-star.psd')} />
                    </TouchableOpacity>
                    <PurpleSlideout style={{position: 'absolute'}}
                        ref={pointer => {this.purpleslideout = pointer;}}
                        callback={this.getResponse.bind(this)}
                        // text="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from
                        // making it over years old. Richard McClintock, a Latin professor at 
                        // Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, 
                        // consectetur, from a Lorem Ipsum passage, and going through the cites of the word in
                        // classical literature, discovered the undoubtable source. Lorem Ipsum comes from 
                        // sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of
                        // Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory 
                        // ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem 
                        // ipsum dolor sit amet..', comes from a line in section 1.10.32.
                        // The standard chunk of Lorem Ipsum used since the 1500s is reproduced below 
                        // for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum 
                        // et Malorum' by Cicero are also reproduced in their exact original form, 
                        // accompanied by English versions from the 1914 translation by H. Rackham.
                        // It is a long established fact that a reader will be distracted by the readable 
                        // content of a page when looking at its layout. The point of using Lorem Ipsum is 
                        // that it has a more-or-less normal distribution of letters, as opposed to using 
                        // 'Content here, content here', making it look like readable English. Many desktop 
                        // publishing packages and web page editors now use Lorem Ipsum as their default model 
                        // text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                        // Various versions have evolved over the years, sometimes by accident, sometimes on 
                        // purpose (injected humour and the like).
                        // There are many variations of passages of Lorem Ipsum available, but the majority have
                        // suffered alteration in some form, by injected humour, or randomised words which don't 
                        // look even slightly believable. If you are going to use a passage of Lorem Ipsum, you
                        // need to be sure there isn't anything embarrassing hidden in the middle of text. All
                        // the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as 
                        // necessary, making this the first true generator on the Internet. It uses a dictionary
                        // over 200 Latin words, combined with a handful of model sentence structures, to generate
                        // Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free 
                        // m repetition, injected humour, or non-characteristic words etc." 
                        confirm = {this._onPressButtonOk} />
                    </View>
                    <View style={{zIndex:1}}>
                        <ScrollView>
                            <EventCard  name='Justin Timberlake'
                                        address='Heidelberg, PA 15106'
                                        date='Monday, December 10th - 7.30 PM'
                                        text='abc1'
                                        callback={this._onPressButtonAt.bind(this)}
                            />
                            <EventCard callback={this._onPressButtonAt.bind(this)}
                                       text='abc2' />
                            <EventCard callback={this._onPressButtonAt.bind(this)}
                                        text='abc3' />
                            <EventCard callback={this._onPressButtonAt.bind(this)}
                                        text='abc4' />
                            <EventCard callback={this._onPressButtonAt.bind(this)}
                                        text='abc5' /> 
                        </ScrollView>
                    </View>
            </View>
        )
    }
}
    
