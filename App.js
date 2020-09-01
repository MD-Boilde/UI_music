import React from 'react';
import {
  SafeAreaView,Image,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import HomeScreen from './screens/HomeScreen';
import LoadingScreen from './screens/LoadingScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import MessageScreen from './screens/MessageScreen';
import ProfileScreen from './screens/ProfileScreen';
import * as firebase from 'firebase';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {createStackNavigator } from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

var firebaseConfig = {     
  apiKey : "AIzaSyBygjtzIr7Kvx7i1znFI1EtRVkNq3PZZq8" ,    
  authDomain : "socialapp-88d7b.firebaseapp.com" ,     
  databaseURL : "https: // socialapp-88d7b.firebaseio.com " ,
  projectId : "socialapp-88d7b" ,     
  storageBucket : "socialapp-88d7b.appspot.com" ,     
  messagingSenderId : "680553377304" ,     
  appId : "1: 680553377304: web: 51a99b8557053092ec9d6d" }; 
firebase . initializeApp ( firebaseConfig );

const AppTabNavigator = createBottomTabNavigator(
  {
    Home : {
      screen : HomeScreen,
      navigationOptions :{
        tabBarIcon :({tintColor}) =><Image
          source ={require('./assets/home.png')} style ={styles.addAvatar}
        ></Image>
      }
    },
    Message : {
      screen : MessageScreen,
      navigationOptions : {
        tabBarIcon :({tintColor}) => <Image
        source ={require('./assets/message.png')} style ={styles.addAvatar}
      ></Image>
      }
    },
    Profile : {
      screen : ProfileScreen,
      navigationOptions : {
        tabBarIcon : ({tintColor}) => <Image
        source ={require('./assets/man.png')} style ={styles.addAvatar}
      ></Image>
      }
    }
  },
  {
    tabBarOptions : {
      // activeTintColor : "#161F3D",
      // inactiveTintColor : "#B8BBC4",
      showLabel : true
    }
    
  }
)

const AuthStack = createStackNavigator({
  Login : LoginScreen,
  Register : RegisterScreen
});

export default createAppContainer(
  createSwitchNavigator(
    {
        Loading : LoadingScreen,
        App : AppTabNavigator,
        Auth : AuthStack
    },
    {
      initialRouteName : "Loading"
    }
  )
);
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  greeting: {
    marginTop: -32,
    fontSize: 25,
    fontWeight: '600',
    textAlign: 'center'
  },
  form: {
    marginBottom: 30,
    marginHorizontal: 30
  },
  inputTitle: {
    color: '#414959',
    fontSize: 13,
    textTransform: 'uppercase'
  },
  input: {
    borderBottomColor: '#8a8f9e',
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    fontSize: 15,
    color: '#161f3d'
  },
  button: {
    marginHorizontal: 30,
    backgroundColor: '#E9446a',
    borderRadius: 4,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center'
  },
  errorMessage: {
    height: 72,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 30
  },
  error: {
    color: '#e9446a',
    fontSize: 13,
    fontWeight: '600',
    textAlign: 'center'
  },
  back :{
      position : "absolute",
      top : 20,
      left: 15,
      width : 32,
      height : 32,
      borderRadius : 16,
      backgroundColor : "white",
      alignItems : "center",
      justifyContent : "center"
  },
  iconBack :{
    resizeMode: "contain",
    height: 15,
    width: 15
  },
  addAvatar :{
    resizeMode: "contain",
    height: 26,
    width: 30,
  }

});
