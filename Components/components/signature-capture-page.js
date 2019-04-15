import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TextInput, View, ScrollView,FlatList, Image,TouchableHighlight, TouchableOpacity } from 'react-native';
import SignatureCapture from '@alanlima/react-native-signature-capture';

type Props = {};
export default class SignatureCapturePage extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = { signature: null };
  }

  saveSign() {
    this.refs["sign"].saveImage();
  }

  resetSign() {
      this.refs["sign"].resetImage();
  }

  _onSaveEvent(result) {
      //result.encoded - for the base64 encoded png
      //result.pathName - for the file path name
      const base64String = `data:image/png;base64,${result.encoded}`;
      this.setState({signature: base64String});
      console.log(result);
  }
  _onDragEvent() {
      // This callback will be called when the user enters signature
      console.log("dragged");
  }
  render() {
    const style = `.m-signature-pad--footer
      .button {
        background-color: red;
        color: #FFF;
    }`;
    return (
        <ScrollView style={styles.container}>
          {/* <Text style={{fontSize:96}}>Scroll me plz</Text> */}
          <View style={{ height: 400, margin: 20 }}  >
                {/* <Text style={{alignItems:"center",justifyContent:"center"}} >Signature Capture Extended </Text> */}
                <SignatureCapture
                    style={[{flex:1},styles.signature,]}
                    ref="sign"
                    onSaveEvent={this._onSaveEvent.bind(this)}
                    onDragEvent={this._onDragEvent}
                    saveImageFileInExtStorage={false}
                    showNativeButtons={false}
                    rotateClockwise={!!true}
                    showTitleLabel={true}
                    viewMode={"portrait"}
                    />
                <View style={{ flex: 1, flexDirection: "row", justifyContent: 'space-around',}}>
                    <TouchableOpacity style={styles.buttonStyle}
                        onPress={() => { this.saveSign() } } >
                        <Text style= {{fontSize: 18,}}>Save</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonStyle}
                        onPress={() => { this.resetSign() } } >
                        <Text style= {{fontSize: 18,}}>Reset</Text>
                    </TouchableOpacity>
                </View>
 
            </View>
            <View style={{height:400}}>
            {this.state.signature ? (
              <Image
                resizeMode={"contain"}
                style={{ width: 335, height: 414 }}
                source={{ uri: this.state.signature }}
              />
            ) : 
              null
            }
          </View>
          {/* <View style={{height:400, width: 200, margin:100}}>
            <TextInput value={this.state.signature}
                      style={{height:400, width: 200}}
                      multiline= {'true'}></TextInput>
          </View> */}
        </ScrollView>
        );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
      //flexDirection: "column",
      //transform: [{ rotate: '270deg'}]
      //backgroundColor: '#649EBC',
      //padding: 20,
    },
    buttonStyle: {
        height: 30,
        backgroundColor: 'transparent'
        //borderWidth: 2
    }
  });