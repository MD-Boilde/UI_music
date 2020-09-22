import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image,

} from 'react-native';
import * as firebase from 'firebase';
import { SafeAreaView } from 'react-navigation';
import { ScrollView, FlatList } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ListSong from '../assets/ListSongDB';
import LinearGradient from 'react-native-linear-gradient';

const ProfileItem = ({ icon, name, screen }) => {

    return (

        <View style={style.itemContainer}>
            <MaterialCommunityIcons name={icon} size={26} color="#1e1e1e" />
            <Text style={[style.itemText, { marginLeft: icon ? 20 : 0 }]}>{name}</Text>
            <FontAwesome onPress={() => { }} name="angle-right" size={26} color="#1e1e1e" />
        </View>
    )
};
const ListSongItem = (props) => (
    <View>
        <FlatList

            data={ListSong}
            keyExtractor={(item, index) => item.id}
            renderItem={({ item }) => (
                <View style={style.itemContainer}>
                    <Image style={style.imageList} source={item.src}></Image>
                    <View style={style.listsong}>
                        <Text style={style.itemText}>{item.name}</Text>
                        <Text style={style.numOfsong}>{item.numOfsong}</Text>
                    </View>
                </View>
            )
            }
        />
    </View>
);
class ProfileScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <View style={style.screenContainer}>
                <View>
                    <View style={style.container}>
                        <Text style={style.textHeader}>My Music</Text>
                        <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.navigate('Setting');
                            }}
                        >
                            <Image style={style.btnSetting} source={require('../assets/gear.png')}></Image>
                        </TouchableOpacity>
                    </View>

                    <LinearGradient colors={['#f57d73', '#f5bb8C']} style={{ height: 75, alignItems: 'flex-start' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image style={style.iconUser} source={require('../assets/user.png')}></Image>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={style.textUser}>Mạnh Đình</Text>
                            </View>
                        </View>
                    </LinearGradient>


                    <View style={{ flexDirection: "column" }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 15 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 20, marginLeft: 15 }}>Library</Text>
                            <Text onPress={() => { this.props.navigation.navigate('ListSongs') }} style={{ marginRight: 15 }}>View all</Text>
                        </View>

                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('ListSongs') }}>
                            <ProfileItem  icon="music" name="All songs" />
                        </TouchableOpacity>
                        <ProfileItem icon="download" name="Download" />
                        <ProfileItem icon="history" name="Recently Played" />
                        <ProfileItem icon="format-list-bulleted" name="Playlist" />

                        <View style={style.divider} />
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 15 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 20, marginLeft: 15 }}>Your Playlist</Text>
                            <FontAwesome name="plus" size={22} style={{ marginRight: 20 }}></FontAwesome>

                        </View>

                    </View>
                </View>

                <View style={{ flex: 1 }}>
                    
                        <ListSongItem />
                    
                </View>
            </View>

        )
    }
}
const style = StyleSheet.create({
    screenContainer: {
        flex: 1,
        backgroundColor: 'white',

    },
    container: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: 'white',
        height: 60
    },
    iconUser: {
        height: 45,
        width: 45,
        margin: 15,

    },
    btnSetting: {
        height: 30,
        width: 30,
        marginRight: 15,
        // borderColor : 'gray'
        // borderRadius : 40/2,
    },
    textHeader: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        margin: 15
    },
    textUser: {

        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    },
    divider: {
        height: 10,
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
        backgroundColor: 'white'
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
        fontSize: 16
    },
    imageList: {
        height: 50,
        width: 50,
        marginHorizontal: 5
    },
    listsong: {
        flexDirection: 'column',
        // alignItems : 'center',
        marginVertical: 6,
        marginHorizontal: 10
    },
    numOfsong: {
        fontSize: 13,
        color: 'gray', marginLeft: 6
    }

});
export default ProfileScreen;
