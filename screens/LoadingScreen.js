import React, { Component } from 'react';
import { Text, View ,StyleSheet, ActivityIndicator} from 'react-native';
import * as firebase from 'firebase';

class LoadingScreen extends React.Component{
    componentDidMount(){
        firebase.auth().onAuthStateChanged(user =>{
            this.props.navigation.navigate(user ? "App" : "Auth");
        });
    }
    render(){
        return(
            <View>
                <Text>Loading...</Text>
                <ActivityIndicator size ="large"></ActivityIndicator>
            </View>
        )
    }
}
const style = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center"
    }
});
export default LoadingScreen;
