import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import CustomText from '../constants/CustomText';
import CustomTextGuj from '../constants/CustomTextGuj';
import style from '../constants/style';
import color from '../constants/theme/color';

const WelcomeScreen = () => {
  return (
    <View style={style.screen}>
      <View
        style={{
          marginBottom: '15%',
          marginTop: '10%',
          paddingHorizontal: 15,
          alignItems: 'center',
          flex: 1,
          justifyContent: 'space-between',
          width: '100%',
        }}>
        <Image
          source={require('../assets/images/welcomeImage.png')}
          style={{width: '100%', height: '55%', borderRadius: 1000}}
          // resizeMode="contain"
        />
        <View style={{width: '100%'}}>
          <CustomText style={{fontWeight: 'bold', fontSize: 28}}>
            Welcome to{'\n'}Jay Seeds!
          </CustomText>
          <CustomText style={{marginTop: 15, fontSize: 16, fontWeight: '600'}}>
            Get precise solution to all your problem instantly
          </CustomText>
        </View>
      </View>
    </View>
  );
};

export default WelcomeScreen;
