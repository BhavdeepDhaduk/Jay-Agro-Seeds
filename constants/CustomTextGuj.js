import React from 'react';
import {Text, StyleSheet} from 'react-native';

export default function CustomTextGuj(props) {
  return (
    <Text {...props} style={{...style.text, ...props.style}}>
      {props.children}
    </Text>
  );
}

const style = StyleSheet.create({
  text: {
    color: 'black',
    // fontSize: 16,
  },
});
