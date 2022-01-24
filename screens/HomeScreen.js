import React from 'react';
import {View} from 'react-native';

import CustomText from '../constants/CustomText';
import style from '../constants/style';

const HomeScreen = props => {
  return (
    <View style={style.screen}>
      <CustomText>Home Screen</CustomText>
    </View>
  );
};

export default HomeScreen;
