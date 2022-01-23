import React from 'react';
import {View, Image} from 'react-native';

import CustomText from '../constants/CustomText';

const Logo = props => {
  return (
    <View style={{...props.style, alignItems: 'center'}}>
      <Image
        source={require('../assets/logo.jpeg')}
        style={{height: 80, borderRadius: 80, width: 80}}
      />
      <CustomText
        style={{
          fontSize: 24,
          color: 'black',
          fontWeight: 'bold',
          marginTop: 15,
        }}>
        Jay Seeds
      </CustomText>
    </View>
  );
};

export default Logo;
