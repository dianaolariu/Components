import React, {Component} from 'react';
import { StyleSheet, Text,View, ScrollView, Image, TouchableOpacity } from 'react-native';
import SignatureCapture from '@alanlima/react-native-signature-capture';


export default class SignatureCapturePage extends Component {
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
        return (
            <ScrollView>
                <View style={styles.capture}>
                    <SignatureCapture
                        style={[{flex:1},styles.signature,]}
                        ref="sign"
                        onSaveEvent={this._onSaveEvent.bind(this)}
                        onDragEvent={this._onDragEvent}
                        saveImageFileInExtStorage={false}
                        showNativeButtons={false}
                        showTitleLabel={false}
                        viewMode={"portrait"}
                        //rotateClockwise={!!true}
                    />
                    <View style={styles.tab}>
                        <TouchableOpacity onPress={() => { this.saveSign() }}>
                            <Text style={styles.text}>Save</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { this.resetSign() }}>
                            <Text style={styles.text}>Reset</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{width: 60, height: 60,}}>
                    {this.state.signature ? (
                    <Image
                        source={{ uri: this.state.signature }}
                        style={{width: '100%', height:'100%'}}
                        resizeMode="contain"

                    /> ) : null
                    }
                </View>
            </ScrollView>
        );
    }
};
  
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    capture: {
        height: 200,
        margin: 20,    
    },
    tab: {
        flexDirection: "row",
        justifyContent: 'space-around',
    },
    text: {
        fontSize: 20,
    },
});