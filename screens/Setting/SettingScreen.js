import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image,
    Switch,
} from 'react-native';
import * as firebase from 'firebase';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import ModalDropdown from 'react-native-modal-dropdown';
import Ionicons from 'react-native-vector-icons/Ionicons';
const SettingScreen = (props) => {
    const [isEnabled, setIsEnabled] = useState(true);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    // console.log(props);
    return (
        <View style={style.container}>
            <View style={style.btnBack}>
                <TouchableOpacity
                    onPress={() => {
                        props.navigation.navigate('Profile');
                    }}
                >
                    <FontAwesome name="angle-left" size={26} color="#1e1e1e" />
                </TouchableOpacity>
            </View>

            <Text style={style.title}>Setting</Text>

            <TouchableOpacity style={style.itemSetting}
                onPress={() => { props.navigation.navigate('MusicSetting'); }}
            >
                <Ionicons name="ios-play-outline" size={24} color='#c3c3c3'></Ionicons>
                <Text style={style.itemText}>Music Player and MV</Text>
            </TouchableOpacity>

            <TouchableOpacity style={style.itemSetting}
                onPress={() => { }}>
                <Ionicons name="download-outline" size={24} color='#c3c3c3'></Ionicons>
                <Text style={style.itemText}>Download</Text>
            </TouchableOpacity>

            <TouchableOpacity style={style.itemSetting}
                onPress={() => { }}>
                <MaterialCommunityIcons name="headphones" size={24} color='#c3c3c3'></MaterialCommunityIcons>
                <Text style={style.itemText}>Music device</Text>
            </TouchableOpacity>

            <TouchableOpacity style={style.itemSetting}
                onPress={() => { }}>
                <MaterialCommunityIcons name="theme-light-dark" size={24} color='#c3c3c3'></MaterialCommunityIcons>
                <Text style={style.itemText}>Theme</Text>
                <Text style={{ color: 'gray', marginRight: 15 }}
                    onPress={() => { }}
                >Light</Text>
            </TouchableOpacity>

            <TouchableOpacity style={style.itemSetting}
                onPress={() => { }}>
                <MaterialCommunityIcons name="bell-outline" size={24} color='#c3c3c3'></MaterialCommunityIcons>
                <Text style={style.itemText}>Nofitication</Text>
                <Switch
                    style={style.mgRight}
                    trackColor={{ false: "#f4f3f4", true: "#ff6666" }}
                    thumbColor={isEnabled ? "#cc3300" : "#888888"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </TouchableOpacity>

            <TouchableOpacity style={style.itemSetting}
                onPress={() => { }}>
                <Ionicons name="key" size={24} color='#c3c3c3'></Ionicons>
                <Text style={style.itemText}>Change password</Text>
            </TouchableOpacity>

            <TouchableOpacity style={style.itemSetting}
                onPress={() => { }}>
                <Ionicons name="information-circle-sharp" size={24} color='#c3c3c3'></Ionicons>
                <Text style={style.itemText}>Version</Text>
                <Text style={{ color: 'gray', marginRight: 15 }}>1.1.0</Text>
            </TouchableOpacity>

            <View style={style.itemSetting}
                onPress={() => { }}>
                <Ionicons name="ios-star" size={24} color='#c3c3c3'></Ionicons>
                <Text style={style.itemText}>Rate</Text>
            </View>

            <View style={style.itemSetting}
                onPress={() => { }}>
                <Ionicons name="ios-document-text" size={24} color='#c3c3c3'></Ionicons>
                <Text style={style.itemText}>Terms / Policy</Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    mgRight: {
        position: 'absolute',
        right: 15
    },
    btnBack: {
        marginLeft: 10,
        marginTop: 20
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        paddingVertical: 20, marginLeft: 10
    },
    itemContainer: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 10,
        alignItems: 'center',
    },
    itemText: {
        flex: 1,
        color: '#1e1e1e',
        fontSize: 16, 
        marginHorizontal: 15,
        fontWeight : 'bold'
    },
    itemSetting: {
        marginVertical: 10,
        marginHorizontal: 5,
        flexDirection: 'row'
    },


});
export default SettingScreen;
