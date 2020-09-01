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
class MessageScreen extends React.Component{
    render(){
        return(
            <View>
                <Text>MessageScreen</Text>
                <TouchableOpacity
                    style={{ alignSelf: 'center', marginTop: 32 }}
                    onPress={() => {
                        this.props.navigation.navigate('Login');
                    }}
                >
                    <Text style={{ color: '#414959', fontSize: 13 }}>
                        Have a account?{' '}
                        <Text style={{ fontWeight: '500', color: '#E9446A' }}>Sign In</Text>
                    </Text>
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
export default MessageScreen;
