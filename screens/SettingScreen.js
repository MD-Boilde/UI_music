import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image,
    StatusBar,
    LayoutAnimation, Switch,
} from 'react-native';
import * as firebase from 'firebase';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import ModalDropdown from 'react-native-modal-dropdown';
// import {} from 'react-native-'
const SwitchItem =(name) =>{

}
const SettingScreen = () => {
    const [isEnabled1, setIsEnabled1] = useState(false);
    const [isEnabled2, setIsEnabled2] = useState(false);
    const [isEnabled3, setIsEnabled3] = useState(false);
    const [isEnabled4, setIsEnabled4] = useState(false);
    const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);
    const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);
    const toggleSwitch3 = () => setIsEnabled3(previousState => !previousState);
    const toggleSwitch4 = () => setIsEnabled4(previousState => !previousState);

    return (
        <View>
            <View style={style.btnBack}>
                <TouchableOpacity
                    onPress={() => {

                    }}
                >
                    <FontAwesome name="angle-left" size={26} color="#1e1e1e" />
                </TouchableOpacity>
            </View>

            <Text style={style.title}> Music player & MV</Text>

            <View style={style.itemContainer}>
                <Text style={style.itemText}>Music quality</Text>
                {/* <ModalDropdown options={['128 Kbps', '320 Kbps','500 Kbps']}/> */}
            </View>

            <View style={style.itemContainer}>
                <Text style={style.itemText}>Video quality</Text>
                {/* <ModalDropdown options={['128 Kbps', '320 Kbps','480 Kbps']}/> */}
            </View>

            <View style={style.itemContainer}>
                <Text style={style.itemText}>Karaoke lyrics</Text>
                <Switch
                    trackColor={{ false: "#f4f3f4", true: "#ff6666" }}
                    thumbColor={isEnabled1 ? "#cc3300" : "#888888"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch1}
                    value={isEnabled1}
                />
            </View>

            <View style={style.itemContainer}>
                <Text style={style.itemText}>Shake to move next song</Text>
                <Switch
                    trackColor={{ false: "#f4f3f4", true: "#ff6666" }}
                    thumbColor={isEnabled2 ? "#cc3300" : "#888888"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch2}
                    value={isEnabled2}
                />
            </View>

            <View style={style.itemContainer}>
                <Text style={style.itemText}>Stop when there is a long sound(Call...)</Text>
                <Switch
                    trackColor={{ false: "#f4f3f4", true: "#ff6666" }}
                    thumbColor={isEnabled3 ? "#cc3300" : "#888888"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch3}
                    value={isEnabled3}
                />
            </View>

            <View style={style.itemContainer}>
                <Text style={style.itemText}>Louder / low sound as you continue/stop/move next song</Text>
                <Switch
                    trackColor={{ false: "#f4f3f4", true: "#ff6666" }}
                    thumbColor={isEnabled4 ? "#cc3300" : "#888888"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch4}
                    value={isEnabled4}
                />
            </View>

        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    btnBack: {
        marginLeft: 10,
        marginTop: 20
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        paddingVertical: 20
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
        fontSize :16
    },

});
export default SettingScreen;
