import React, {useEffect} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import ChooseLangScreen from '../screens/ChooseLangScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import CreateProfileScreen from '../screens/CreateProfileScreen';
import HomeScreen from '../screens/HomeScreen';
import animScreen from '../screens/animScreen';
import ProfileScreen from '../screens/ProfileScreen';
import MyBagScreen from '../screens/MyBagScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const HomeScreenStack = props => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" options={{headerTitleStyle: {fontSize: 22}}}>
        {homeProps => (
          <HomeScreen
            navigation={homeProps.navigation}
            route={homeProps.route}
            drawerProps={props}
          />
        )}
      </Stack.Screen>
      <Stack.Screen
        name="MyBag"
        component={MyBagScreen}
        options={{headerTitleStyle: {fontSize: 18}}}
      />
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
          headerShown: false,
          title: 'Home',
        }}
      />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
};

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name="anim" component={animScreen} /> */}
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="ChooseLang" component={ChooseLangScreen} />
        <Stack.Screen name="HomeDrawer" component={HomeDrawerNavigator} />
        <Stack.Screen
          name="CreateProfile"
          component={CreateProfileScreen}
          options={{headerShown: true, headerTitle: 'Create Profile'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
