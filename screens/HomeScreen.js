import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar,
  LayoutAnimation
} from 'react-native';
import * as firebase from 'firebase';
class HomeScreen extends React.Component{
    signOutUser = ()=>{
        firebase.auth().signOut();
    }
    render(){
        return(
            <View style={style.container}>
                <Text>HomeScreen</Text>
                <TouchableOpacity
                    style={{ alignSelf: 'center', marginTop: 32 }}
                    onPress={() => {
                        this.signOutUser();
                    }}
                >
                    <Text style={{ fontWeight: '500', color: '#E9446A' }}>Sign Out</Text>
                </TouchableOpacity>
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
export default HomeScreen;
