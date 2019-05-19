import React from "react";
import { SafeAreaView, View, Text, FlatList, StyleSheet, ScrollView } from "react-native";
import { Hamburger, EventCard, Button } from "../components";
import colors from "../theme/Colors";
import fonts from '../theme/fonts';
import eventsData  from '../utils/eventsData.json';
import EventsOne from '../services/EventsOne'

class Events extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <Text style={{ fontFamily: fonts.serifRegular, fontSize: 24}}>Events</Text>,
      headerLeft: (
        <Hamburger style={{ marginLeft: 12, }} burgerPress={() => navigation.toggleDrawer()}/>
      ),
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    EventsOne.getEvents(19999).then((response) => {
      console.log(JSON.stringify(response.payload));
      this.setState({ data: response.payload });
    });
  }

  render() {
    const { data } = this.state;
    console.log(data);
    return (
      <ScrollView style={{ width: "100%", height: "100%", backgroundColor: "white" }}>
        <SafeAreaView style={{ width: "100%", height: "100%", }}>
          <FlatList
            keyExtractor={item => item.ID}
            data={this.state.data}
            renderItem={({ item }) => ( 
            <EventCard 
              name={item.hostfirstName}
              time={item.EventDateTime.substr(item.EventDateTime.indexOf(' ')+1).toLowerCase()}
              date={item.EventDateTime.substr(0,item.EventDateTime.indexOf(' '))}
              address1={item.Tasting_addressLine1}
              address2={[item.Tasting_city, `${', '}`, item.Tasting_state, `${' '}`, item.Tasting_zip]}
              index={item.ID}
            /> 
            )}
          />    
        <View style={styles.bottomBar}>
          <Button
            text="Create Event"
            textColor="white"
            style={[styles.button, {width: "54%", height: 50}]}
            onPress={()=> this.props.navigation.push('CreateEvent')}
          />
        </View>
        </SafeAreaView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  bottomBar: {
    height: 60,
    width: '100%',
    backgroundColor: 'white',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopColor: colors.lightPurple,
    borderTopWidth: 1,
  },
});

export default Events;
