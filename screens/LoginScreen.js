import React, {useState} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';

import Logo from '../components/Logo';
import CustomText from '../constants/CustomText';
import CustomTextGuj from '../constants/CustomTextGuj';
import style from '../constants/style';
import color from '../constants/theme/color';

const LoginScreen = () => {
  const [number, setNumber] = useState('');

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
          {number ? (
            <>
              <CustomText
                style={{fontWeight: 'bold', fontSize: 16, marginBottom: 10}}>
                OTP Verification
              </CustomText>
              <View
                style={{
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <CustomText>Enter the OTP sent to </CustomText>
                <TouchableOpacity>
                  <CustomText style={{fontWeight: 'bold', fontSize: 16}}>
                    {number + ' '}
                    <AntDesign name="edit" size={18} />
                  </CustomText>
                </TouchableOpacity>
              </View>
              <OTPInputView
                pinCount={4}
                style={{
                  height: 50,
                  marginTop: 20,
                  marginLeft: 40,
                  marginRight: 10,
                }}
                codeInputFieldStyle={{
                  color: 'black',
                  borderColor: '#bcbcbc',
                }}
                onCodeFilled={() => 4}
                // keyboardType="default"
              />
              <TouchableOpacity style={{marginTop: 30}}>
                <CustomText style={{fontWeight: 'bold', fontSize: 16}}>
                  Resend OTP
                </CustomText>
              </TouchableOpacity>
            </>
          ) : (
            <>
              <TextInput
                placeholder="Phone Number"
                style={{
                  paddingVertical: 5,
                  paddingHorizontal: 15,
                  width: '100%',
                  borderWidth: 1,
                  borderRadius: 10,
                }}
              />
              <TouchableOpacity style={{marginTop: 30}}>
                <CustomText style={{fontWeight: 'bold', fontSize: 16}}>
                  Get OTP
                </CustomText>
              </TouchableOpacity>
            </>
          )}
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
