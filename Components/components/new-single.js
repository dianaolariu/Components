import React, { Component } from 'react';
import { StyleSheet,TouchableOpacity,Alert, Text, List, View, Linking, Button} from 'react-native';


const SingleZipcode = (item) => {
    axios.get('/user?ID=12345')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

export default SingleZipcode;