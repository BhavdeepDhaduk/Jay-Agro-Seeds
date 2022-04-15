import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Animated,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Easing} from 'react-native-reanimated';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

import CustomText from '../constants/CustomText';
import style from '../constants/style';
import color from '../constants/theme/color';

const HomeScreen = props => {
  const [askExpertWidth, setAskExpertWidth] = useState(new Animated.Value(120));
  const [isWide, setIsWide] = useState(true);

  useEffect(() => {
    props.navigation.setOptions({
      title: 'Jay Seeds',
      headerLeft: () => (
        <TouchableOpacity
          activeOpacity={0.3}
          onPress={() => props.drawerProps.navigation.toggleDrawer()}>
          <Ionicons
            name="ios-menu"
            size={25}
            color="black"
            style={{marginRight: 10, marginTop: 3}}
          />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <View style={{flexDirection: 'row'}}>
          <Feather
            name="bell"
            size={25}
            color="black"
            style={{marginRight: 20}}
          />
          <TouchableOpacity
            activeOpacity={0.3}
            onPress={() => props.navigation.navigate('MyBag')}>
            <Feather
              name="shopping-bag"
              size={25}
              color="black"
              style={{marginRight: 20}}
            />
          </TouchableOpacity>
        </View>
      ),
    });
  });

  const toggleAnimation = () => {
    if (isWide == false) {
      Animated.timing(askExpertWidth, {
        toValue: 120,
        timing: 1500,
        useNativeDriver: false,
      }).start(() => {
        setIsWide(true);
      });
    } else {
      Animated.timing(askExpertWidth, {
        toValue: 44,
        timing: 1500,
        useNativeDriver: false,
      }).start(setIsWide(false));
    }
  };

  const animatedStyle = {
    width: askExpertWidth,
  };

  return (
    <ScrollView contentContainerStyle={{flex: 1}}>
      <View style={style.screen}>
        {/* <TouchableOpacity
          activeOpacity={0.8}
          // onPress={toggleAnimation}
          style={{
            position: 'absolute',
            bottom: 10,
            right: 10,
            backgroundColor: color.primary,
            borderRadius: 100,
          }}>
          <Animated.View style={[styles.askExpertBtn, animatedStyle]}>
            <MaterialIcons name="support-agent" color="black" size={28} />
            <CustomText style={{marginLeft: 8, opacity: isWide ? 1 : 0}}>
              Ask Expert
            </CustomText>
          </Animated.View>
        </TouchableOpacity> */}
        <View
          style={{
            width: '100%',
            flex: 1,
            paddingTop: 30,
            paddingHorizontal: 20,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={styles.productTypeContainer}>
              <MaterialCommunityIcons
                name="seed-outline"
                color="black"
                size={23}
              />
              <CustomText style={{marginTop: 15}}>Pesticides</CustomText>
            </View>
            <View style={styles.productTypeContainer}>
              <MaterialCommunityIcons
                name="seed-outline"
                color="black"
                size={23}
              />
              <CustomText style={{marginTop: 15}}>Seeds</CustomText>
            </View>
            <View style={styles.productTypeContainer}>
              <MaterialCommunityIcons
                name="seed-outline"
                color="black"
                size={23}
              />
              <CustomText style={{marginTop: 15}}>Fertilizers</CustomText>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              backgroundColor: color.primary,
              marginTop: 30,
              paddingVertical: 15,
              paddingHorizontal: 5,
              overflow: 'hidden',
              borderRadius: 8,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
                paddingHorizontal: 5,
              }}>
              <MaterialCommunityIcons
                name="cash-marker"
                color="black"
                size={28}
              />
              {/* <Text lineBreakMode='middle' ></Text> */}
              <CustomText
                style={{marginLeft: 5, fontSize: 10, fontWeight: '600'}}>
                Cash on{'\n'}Delivery
              </CustomText>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
                paddingHorizontal: 15,
                borderLeftWidth: 0.5,
                borderRightWidth: 0.5,
                borderColor: 'white',
              }}>
              <MaterialCommunityIcons
                name="truck-delivery"
                color="black"
                size={28}
              />
              <CustomText
                style={{marginLeft: 5, fontSize: 10, fontWeight: '600'}}>
                Free Delivery,{'\n'}Free Returns
              </CustomText>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
                paddingHorizontal: 5,
              }}>
              <MaterialCommunityIcons
                name="label-percent"
                color="black"
                size={28}
              />
              <CustomText
                style={{marginLeft: 5, fontSize: 10, fontWeight: '600'}}>
                Lowest{'\n'}Price
              </CustomText>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  productTypeContainer: {
    alignItems: 'center',
    borderWidth: 0.5,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 15,
    width: '30%',
    elevation: 3,
    backgroundColor: 'white',
  },
  askExpertBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: color.primary,
    alignSelf: 'baseline',
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 50,
    elevation: 3,
    overflow: 'hidden',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.26,
    shadowRadius: 10,
    height: 44,
  },
});

export default HomeScreen;
