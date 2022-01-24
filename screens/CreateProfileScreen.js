import React from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';

import CustomText from '../constants/CustomText';
import style from '../constants/style';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import color from '../constants/theme/color';

const InputBox = props => {
  return (
    <TextInput
      placeholder={props.placeholder}
      style={{
        borderWidth: 1,
        width: '100%',
        paddingHorizontal: 10,
        borderRadius: 10,
        paddingVertical: 8,
        borderColor: '#878787',
        marginTop: 15,
        ...props.style,
      }}
      placeholderTextColor={'#878787'}
    />
  );
};

const CreateProfileScreen = () => {
  return (
    <View style={style.screen}>
      <View
        style={{flex: 1, paddingHorizontal: 20, paddingTop: 30, width: '100%'}}>
        <View style={{flex: 1}}>
          <InputBox placeholder={'Full name*'} />
          <InputBox placeholder={'Phone number*'} />
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-between',
            }}>
            <InputBox
              placeholder={'Pincode*'}
              style={{width: '48%', marginRight: 10}}
            />
            <TouchableOpacity
              style={{
                width: '48%',
                paddingHorizontal: 10,
                borderRadius: 10,
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 15,
                backgroundColor: '#666BF6',
                flexDirection: 'row',
              }}>
              <MaterialIcons name="my-location" size={20} color={'white'} />
              <CustomText
                style={{color: 'white', marginLeft: 5}}
                numberOfLines={1}>
                Use my location
              </CustomText>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-between',
            }}>
            <InputBox placeholder={'State*'} style={{width: '48%'}} />
            <InputBox placeholder={'City*'} style={{width: '48%'}} />
          </View>
          <InputBox placeholder={'House no., Building name*'} />
          <InputBox placeholder={'Road name, Area, Colony*'} />
        </View>
        <TouchableOpacity
          style={{
            width: '100%',
            backgroundColor: color.primary,
            paddingVertical: 12,
            paddingHorizontal: 10,
            borderRadius: 10,
            alignItems: 'center',
            marginBottom: 30,
          }}>
          <CustomText>Finish</CustomText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreateProfileScreen;
