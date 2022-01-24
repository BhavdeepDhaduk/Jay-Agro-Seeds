import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

export default function CustomTextInput(props) {
  return <TextInput {...props} style={{...style.text, ...props.style}} />;
}

const style = StyleSheet.create({
  text: {
    color: 'black',
  },
});
