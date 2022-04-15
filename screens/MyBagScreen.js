import React, {useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Dimensions,
  Image,
  FlatList,
} from 'react-native';
import CustomText from '../constants/CustomText';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import style from '../constants/style';
import color from '../constants/theme/color';

const screenWidth = Dimensions.get('screen').width;

const ProductContainer = props => {
  return (
    <View
      style={{
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 20,
      }}>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={require('../assets/logo.jpeg')}
          style={{height: 80, width: 60}}
        />
        <View style={{marginLeft: 20, flex: 1}}>
          <CustomText style={{fontSize: 17}}>
            {props.product.name + ' (' + props.product.perUnitQuantity + ')'}
          </CustomText>
          <CustomText style={{fontSize: 13, color: '#646464', marginTop: 5}}>
            {props.product.company}
          </CustomText>
          <View style={{flexDirection: 'row'}}>
            <Ionicons
              name={props.product.rating >= 1 ? 'star' : 'star-outline'}
              size={12}
              color={'#FFD700'}
            />
            <Ionicons
              name={props.product.rating >= 2 ? 'star' : 'star-outline'}
              size={12}
              color={'#FFD700'}
            />
            <Ionicons
              name={props.product.rating >= 3 ? 'star' : 'star-outline'}
              size={12}
              color={'#FFD700'}
            />
            <Ionicons
              name={props.product.rating >= 4 ? 'star' : 'star-outline'}
              size={12}
              color={'#FFD700'}
            />
            <Ionicons
              name={props.product.rating >= 5 ? 'star' : 'star-outline'}
              size={12}
              color={'#FFD700'}
            />
          </View>
        </View>
        <MaterialIcons name="delete" size={23} color="#646464" />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          alignItems: 'center',
        }}>
        <CustomText style={{fontWeight: 'bold'}}>
          {'\u20B9 ' + props.product.price}{' '}
        </CustomText>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: '#646464',
          }}>
          <View style={{borderRightWidth: 1, borderColor: '#646464'}}>
            <TouchableOpacity
              style={{
                padding: 10,
              }}>
              <Ionicons name="remove" size={16} color="black" />
            </TouchableOpacity>
          </View>
          <CustomText style={{marginHorizontal: 20}}>
            {props.product.quantity}
          </CustomText>
          <View style={{borderLeftWidth: 1, borderColor: '#646464'}}>
            <TouchableOpacity style={{padding: 10}}>
              <Ionicons name="add" size={16} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const MyBagScreen = props => {
  const item = [
    {
      name: 'Admire',
      company: 'Bayer Pesticides',
      perUnitQuantity: '30ml',
      price: 2000,
      quantity: 1,
      rating: 4,
    },
    {
      name: 'Admire 2',
      company: 'Bayer Pesticides',
      perUnitQuantity: '30ml',
      price: 3000,
      quantity: 1,
      rating: 3,
    },
  ];

  useEffect(() => {
    props.navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          activeOpacity={0.3}
          onPress={() => props.navigation.goBack()}>
          <Ionicons
            name="ios-arrow-back"
            size={25}
            color="black"
            style={{marginRight: 10, marginTop: 3}}
          />
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <View style={style.screen}>
      <View style={{width: '100%', alignItems: 'center'}}>
        {item ? (
          <FlatList
            data={item}
            renderItem={itemData => {
              return <ProductContainer product={itemData.item} />;
            }}
            style={{width: '100%'}}
            ItemSeparatorComponent={() => (
              <View style={{borderTopWidth: 0.5, borderColor: '#bcbcbc'}} />
            )}
          />
        ) : (
          <>
            <View
              style={{
                width: 0.3 * screenWidth,
                height: 0.3 * screenWidth,
                backgroundColor: color.primary,
                alignItems: 'center',
                borderRadius: (0.3 * screenWidth) / 2,
                justifyContent: 'center',
                marginTop: '30%',
              }}>
              <Feather name="shopping-bag" size={50} color={'black'} />
            </View>
            <CustomText style={{marginTop: 30, fontSize: 18}}>
              Your bag is empty!
            </CustomText>
            <CustomText style={{marginTop: 10, fontSize: 14, color: '#646464'}}>
              Add items now
            </CustomText>
            <TouchableOpacity
              style={{
                width: '100%',
                backgroundColor: color.primary,
                paddingVertical: 12,
                paddingHorizontal: 10,
                borderRadius: 10,
                alignItems: 'center',
                marginTop: 30,
              }}>
              <CustomText>Shop Now</CustomText>
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
};

export default MyBagScreen;
