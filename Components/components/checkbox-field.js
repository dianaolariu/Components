import React, { Component } from 'react';
import {
    Dimensions,
    StyleSheet,
    View,
    TouchableWithoutFeedback
} from "react-native";
import PropTypes from 'prop-types';
import CheckBox  from 'react-native';

export default class CheckBoxFiels extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: []
        }
    }

render() {
    const {
        field: {name},
        form: {values},
        options} = this.props;
    return (
        <View style={{ padding: 10 }}>
            <View >
                {options.map( option =>
                    <CheckBox
                        key={option}
                        title={option}
                        checked={values[name].includes(option)}/>
                )}
            </View>
        </View>
    );
}
}