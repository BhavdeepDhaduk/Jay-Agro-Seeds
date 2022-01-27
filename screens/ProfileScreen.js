import React, {useState} from 'react';
import {TouchableOpacity, View, Dimensions, Modal, Image} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import CustomText from '../constants/CustomText';
import style from '../constants/style';
import color from '../constants/theme/color';

const screenWidth = Dimensions.get('screen').width;

const ProfileScreen = props => {
  const [modalVisible, setModalVisible] = useState(false);
  const [imageURI, setImageURI] = useState();
  // console.log(imageURI);
  const openGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      includeBase64: true,
      cropperCircleOverlay: true,
    })
      .then(image => {
        // console.log(image.path);
        setImageURI('data:image/jpg;base64,' + image.data);
        setModalVisible(false);
      })
      .catch(err => {
        console.log('Profile update error: ', err.message);
      });
  };

  const openCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 300,
      cropping: true,
      useFrontCamera: true,
      includeBase64: true,
      cropperCircleOverlay: true,
    })
      .then(image => {
        // console.log(image.path);
        setImageURI('data:image/jpg;base64,' + image.data);
        setModalVisible(false);
      })
      .catch(err => {
        console.log('Profile update error: ', err.message);
      });
  };

  return (
    <View style={style.screen}>
      <View
        style={{
          width: 0.4 * screenWidth,
          height: 0.4 * screenWidth,
          backgroundColor: '#bcbcbc',
          borderRadius: (0.4 * screenWidth) / 2,
          marginTop: 30,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {imageURI ? (
          <Image
            source={{uri: imageURI}}
            style={{
              height: '100%',
              width: '100%',
              borderRadius: (0.4 * screenWidth) / 2,
            }}
          />
        ) : (
          <CustomText style={{fontWeight: 'bold', fontSize: 60}}>N</CustomText>
        )}
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            padding: 10,
            backgroundColor: color.primary,
            borderRadius: 50,
            position: 'absolute',
            bottom: 0,
            right: 0,
          }}
          onPress={() => setModalVisible(true)}>
          <FontAwesome name="camera" size={20} color="black" />
        </TouchableOpacity>
      </View>
      <View style={{marginTop: 30, width: '100%', paddingHorizontal: 30}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 15,
          }}>
          <FontAwesome5 name="user-alt" size={18} color="#646464" />
          <View style={{flex: 1, marginLeft: 30}}>
            <CustomText style={{fontSize: 14, color: '#646464'}}>
              Name
            </CustomText>
            <CustomText style={{fontSize: 16}}>Neelkanth Tandel</CustomText>
          </View>
          {/* <MaterialIcons name="edit" size={23} color={color.primary} /> */}
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 15,
          }}>
          <Ionicons
            name="location"
            size={23}
            color="#646464"
            style={{marginLeft: -3}}
          />
          <View style={{flex: 1, marginLeft: 28}}>
            <CustomText style={{fontSize: 14, color: '#646464'}}>
              Address
            </CustomText>
            <CustomText style={{fontSize: 16}}>
              34, Aksar residency, Udhna, Surat District, Gujarat-335009
            </CustomText>
          </View>
          {/* <MaterialIcons name="edit" size={23} color={color.primary} /> */}
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 15,
          }}>
          <FontAwesome
            name="phone"
            size={18}
            color="#646464"
            // style={{marginLeft: -2}}
          />
          <View style={{flex: 1, marginLeft: 33}}>
            <CustomText style={{fontSize: 14, color: '#646464'}}>
              Phone
            </CustomText>
            <CustomText style={{fontSize: 16}}>+91 12345 67890</CustomText>
          </View>
          {/* <MaterialIcons name="edit" size={23} color={color.primary} /> */}
        </View>
      </View>

      <Modal
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
        animationType="slide">
        <View
          style={{
            flex: 1,
          }}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => setModalVisible(false)}
            style={{
              height: '100%',
              backgroundColor: 'rgba(64,64,64,0.5)',
              justifyContent: 'flex-end',
            }}>
            <View
              style={{
                backgroundColor: 'white',
                width: '100%',
                paddingHorizontal: 10,
                paddingVertical: 20,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <CustomText
                  style={{fontWeight: '600', fontSize: 19, marginLeft: 10}}>
                  Profile photo
                </CustomText>
                <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={() => {
                    setImageURI();
                    setModalVisible(false);
                  }}>
                  <MaterialIcons name="delete" size={23} color="black" />
                </TouchableOpacity>
              </View>
              <View style={{marginTop: 30, flexDirection: 'row'}}>
                <TouchableOpacity
                  activeOpacity={0.6}
                  style={{alignItems: 'center', paddingHorizontal: 10}}
                  onPress={openCamera}>
                  <View
                    style={{
                      padding: 12,
                      borderRadius: 50,
                      borderWidth: 1,
                      borderColor: '#bcbcbc',
                    }}>
                    <FontAwesome
                      name="camera"
                      size={23}
                      color={color.primary}
                    />
                  </View>
                  <CustomText style={{marginTop: 5, color: '#646464'}}>
                    Camera
                  </CustomText>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={{alignItems: 'center', paddingHorizontal: 10}}
                  onPress={openGallery}>
                  <View
                    activeOpacity={0.6}
                    style={{
                      padding: 12,
                      paddingHorizontal: 13,
                      borderRadius: 50,
                      borderWidth: 1,
                      borderColor: '#bcbcbc',
                    }}>
                    <Ionicons name="image" size={23} color={color.primary} />
                  </View>
                  <CustomText style={{marginTop: 5, color: '#646464'}}>
                    Gallery
                  </CustomText>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default ProfileScreen;
