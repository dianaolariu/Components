import React, { Component } from 'react';
import { StyleSheet,TouchableOpacity, Image, Text,View, Linking, ScrollView, Alert} from 'react-native';
import PurpleSlideout from './purple-slideout';

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'row',
        height:150,
        margin: 1,
    },
    containerLeft: {
        flex:0.75,
        flexDirection: 'column',
        alignItems: 'stretch',
        backgroundColor: '#01ab91',
        paddingLeft: 10,
        zIndex: 2,
    },
    containerRight: {
        flex: 0.25,
        flexDirection: 'column',
        padding: 0,
        marginLeft: 0,
        zIndex: 1,

    },
    containerName: {
        flex:0.25,
        flexDirection: 'row',
        //justifyContent: 'space-between',
        //alignItems: 'center',
        backgroundColor: '#01ab91',
        zIndex: 3,

    },
    containerDate: {
        flex:0.50,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        backgroundColor: '#01ab91'
    },
    containerLink: {
        flex:0.25,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#01ab91',
    }, 
    containerFeatured: {
        flex:0.5,
        marginLeft: 2,
        marginBottom: 1,
        backgroundColor: '#ffba15',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingLeft: 17,
        paddingRight: 17,
    },
    containerEvent: {
        flex: 0.5,
        marginLeft: 2,
        marginTop: 1,
        backgroundColor: '#ffba15',
        alignItems: 'center',
        justifyContent: 'space-evenly',  
    },  
  });


export default class EventCard extends Component {
    constructor(props) {
        super(props);
        this.state = {image: require('../assets/book.jpg')}
    };

    // onPress = () => {
    //     this.setState({
    //         image: require('../assets/done.jpg'),
    //         slideoutVisible: true,
    //     })
    // }
    _onPressButtonOk= () => {
        Alert.alert('Event Confirmed')
      }
      _onPressButtonAt= () => {
        this.setState({
        image: require('../assets/done.jpg'),
            slideoutVisible: true,
        })
        this.foo.myFunc(!this.state.slideoutVisible)
        this.setState({slideoutVisible: !this.state.slideoutVisible, })
      }
      
      getResponse(result){
        result ?
        this.setState({slideoutVisible: true, })
        :
        null
    }
    render() {
        const {name, address, date} = this.props;
        return (   
                <View style={styles.container}>
                    <View style={styles.containerLeft}>
                        <View style={styles.containerName}>
                            <Text style={{color: 'white', fontSize: 18,alignSelf: 'center'}}>{name}</Text>
                            <TouchableOpacity onPress={ this.onPress }>
                            
                            <TouchableOpacity style={{marginLeft: 100}}onPress ={this._onPressButtonAt}>
                                <Image style={{width: 30, height: 30}}  source={this.state.image} />
                            </TouchableOpacity>
                            </TouchableOpacity>
                            <PurpleSlideout style={{position: 'absolute'}}
                                ref={foo => {this.foo = foo;}}
                                callback={this.getResponse.bind(this)}
                                text="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from
                                making it over years old. Richard McClintock, a Latin professor at 
                                Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, 
                                consectetur, from a Lorem Ipsum passage, and going through the cites of the word in
                                classical literature, discovered the undoubtable source. Lorem Ipsum comes from 
                                sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of
                                Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory 
                                ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem 
                                ipsum dolor sit amet..', comes from a line in section 1.10.32.
                                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below 
                                for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum 
                                et Malorum' by Cicero are also reproduced in their exact original form, 
                                accompanied by English versions from the 1914 translation by H. Rackham.
                                It is a long established fact that a reader will be distracted by the readable 
                                content of a page when looking at its layout. The point of using Lorem Ipsum is 
                                that it has a more-or-less normal distribution of letters, as opposed to using 
                                'Content here, content here', making it look like readable English. Many desktop 
                                publishing packages and web page editors now use Lorem Ipsum as their default model 
                                text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                                Various versions have evolved over the years, sometimes by accident, sometimes on 
                                purpose (injected humour and the like).
                                There are many variations of passages of Lorem Ipsum available, but the majority have
                                suffered alteration in some form, by injected humour, or randomised words which don't 
                                look even slightly believable. If you are going to use a passage of Lorem Ipsum, you
                                need to be sure there isn't anything embarrassing hidden in the middle of text. All
                                the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as 
                                necessary, making this the first true generator on the Internet. It uses a dictionary
                                over 200 Latin words, combined with a handful of model sentence structures, to generate
                                Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free 
                                m repetition, injected humour, or non-characteristic words etc." confirm = {this._onPressButtonOk} />
                        </View>
                        <View style={styles.containerDate}>
                            <Text style={{color: 'white'}}>{address}</Text>
                            <Text style={{color: 'white'}}>{date}</Text>
                        </View>
                        <View style={styles.containerLink}>
                            <TouchableOpacity>
                                <Text style={{color: 'white', textDecorationLine:'underline'}}
                                    onPress={this._onPressButtonAt}>
                                    Invited: RSVP'd: 9 Outside Orders: 0
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.containerRight}>
                        <ScrollView horizontal={true} style={{ flex: 1}}>
                            <View style={{ flex: 1, flexDirection: 'column',}}>
                                <TouchableOpacity style={styles.containerFeatured} onPress ={this._onPressButtonAt}>
                                    <Image style={{ width: 30, height: 30, }} source={require('../assets/white-star.psd')} />
                                    <Text style={{color: 'white', fontSize: 10}}>FEATURED</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.containerEvent} onPress ={this._onPressButtonAt}>
                                    <Image style={{ width: 30, height: 30,}}  source={require('../assets/white-star.psd')} />
                                    <Text style={{color: 'white', fontSize: 10}}>MANAGE {`\n`} EVENT</Text>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>
                </View> 
        )
    }
}
    
