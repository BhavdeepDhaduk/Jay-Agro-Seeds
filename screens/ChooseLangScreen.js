import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Logo from '../components/Logo';

import CustomText from '../constants/CustomText';
import CustomTextGuj from '../constants/CustomTextGuj';
import style from '../constants/style';
import color from '../constants/theme/color';

const ChooseLangScreen = () => {
  return (
    <View style={style.screen}>
      <View
        style={{
          marginBottom: '15%',
          marginTop: '40%',
          paddingHorizontal: 30,
          alignItems: 'center',
          flex: 1,
          justifyContent: 'space-between',
          width: '100%',
        }}>
        <Logo />
        <View style={{alignItems: 'center', width: '100%'}}>
          <CustomText style={{fontWeight: 'bold', fontSize: 16}}>
            Select Your Language
          </CustomText>
          <CustomTextGuj
            style={{fontWeight: 'bold', fontSize: 16, marginTop: 10}}>
            તમારી ભાષા પસંદ કરો
          </CustomTextGuj>
          <View style={{marginTop: 30, width: '100%'}}>
            <TouchableOpacity
              style={{
                width: '100%',
                backgroundColor: color.primary,
                paddingVertical: 12,
                paddingHorizontal: 10,
                borderRadius: 10,
                alignItems: 'center',
              }}>
              <CustomText>English</CustomText>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: '100%',
                backgroundColor: color.primary,
                paddingVertical: 12,
                paddingHorizontal: 10,
                marginTop: 10,
                borderRadius: 10,
                alignItems: 'center',
              }}>
              <CustomTextGuj>ગુજરાતી</CustomTextGuj>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ChooseLangScreen;
