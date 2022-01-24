import React, {useEffect} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

import ChooseLangScreen from '../screens/ChooseLangScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import CreateProfileScreen from '../screens/CreateProfileScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const HomeScreenStack = props => {
  console.log('HomeStack props: ', props.navigation);

  useEffect(() => {
    props.navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          activeOpacity={0.3}
          onPress={() => props.navigation.toggleDrawer()}>
          <Ionicons
            name="ios-menu"
            size={25}
            color="black"
            style={{marginLeft: 15}}
          />
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

const HomeDrawerNavigator = props => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="HomeStack"
        component={HomeScreenStack}
        options={{
          headerTitle: 'Jay Seeds',
          headerRight: () => (
            <View style={{flexDirection: 'row'}}>
              <Feather
                name="bell"
                size={25}
                color="black"
                style={{marginRight: 10}}
              />
              <Feather
                name="shopping-bag"
                size={25}
                color="black"
                style={{marginRight: 20}}
              />
            </View>
          ),
        }}
      />
      {/* <Drawer.Screen name="Profile" component={CreateProfileScreen} /> */}
    </Drawer.Navigator>
  );
};

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeDrawer" component={HomeDrawerNavigator} />
        <Stack.Screen
          name="CreateProfile"
          component={CreateProfileScreen}
          options={{headerShown: true, headerTitle: 'Create Profile'}}
        />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="ChooseLang" component={ChooseLangScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
