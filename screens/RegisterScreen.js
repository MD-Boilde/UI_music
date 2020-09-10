import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar,Keyboard,
  LayoutAnimation,
  KeyboardAvoidingView,TouchableWithoutFeedback
} from 'react-native';
import * as firebase from 'firebase';

export default class RegisterScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    name : '',
    email: '',
    password: '',
    errorMessage: " "
  };

  handleSignUp = () => {
    const { name,email, password,errorMessage } = this.state;


    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials =>{
          return userCredentials.user.updateProfile({
              displayName : name
          })
      } 
      )
      .catch(error => this.setState({ errorMessage: error.message }));
      // if (errorMessage === " ") firebase.database().ref("Users/" + name).set({email : email});
  };

  render() {
    LayoutAnimation.easeInEaseOut();

    return (
      
        <View style={styles.container}>
        <StatusBar barStyle='light-content'></StatusBar>
        <Image
          source={require('../assets/authHeader.png')}
          style={{ marginTop: -200, marginLeft: -50 }}
        ></Image>
        <Image
          source={require('../assets/authFooter.png')}
          style={{ position: 'absolute', bottom: -325, right: -225 }}
        ></Image>

        <TouchableOpacity style ={styles.back} onPress={() => this.props.navigation.goBack()}> 
            <Image source={require('../assets/back.png')} style ={styles.iconBack} 
            ></Image>
        </TouchableOpacity>
        
            <View style={{position : "absolute",top : 100,alignItems:"center",width: "100%"}}>
                <Text style={styles.greeting}>{'Sign Up.'}</Text>
                <TouchableOpacity style={{}} onPress={() => this.props.navigation.goBack()}>
                    <Image source={require('../assets/addAvatar.png')} style={styles.addAvatar}
                    ></Image>
                </TouchableOpacity>
            </View>

        <View style={styles.errorMessage}>
          {this.state.errorMessage && (
            <Text style={styles.error}> {this.state.errorMessage} </Text>
          )}
        </View>
        
        

        <View style={styles.form}>

        <View >
            <Text style={styles.inputTitle}>Full Name</Text>
            <TextInput
              style={styles.input}
              autoCapitalize='none'
              onChangeText={name => this.setState({ name })}
              value={this.state.name}
            ></TextInput>
          </View>

          <View style={{ marginTop: 15 }}>
            <Text style={styles.inputTitle}>Email Address</Text>
            <TextInput
              style={styles.input}
              autoCapitalize='none'
              onChangeText={email => this.setState({ email })}
              value={this.state.email}
            ></TextInput>
          </View>

          <View style={{ marginTop: 15 }}>
            <Text style={styles.inputTitle}>Password</Text>
            <TextInput
              style={styles.input}
              secureTextEntry
              autoCapitalize='none'
              onChangeText={password => this.setState({ password })}
              value={this.state.password}
            ></TextInput>
          </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={this.handleSignUp}>
          <Text style={{ color: '#fff', fontWeight: '500' }}>Sign up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ alignSelf: 'center', marginTop: 10 }}
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
      
      
    );
  }
}

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
    height: 60,
    width: 60,
    marginTop :25
  }

});
