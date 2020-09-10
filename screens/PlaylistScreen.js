import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image,
    ScrollView,
    FlatList,
    Button,
    Alert,
} from 'react-native';
import * as firebase from 'firebase';
import ListSong from '../assets/ListSongDB';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import Modal, { SlideAnimation, ModalContent } from 'react-native-modals';

class ListSongItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            dataSong: {}
        }
    }
    render() {
        const visible = this.props.visible
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    data={ListSong}
                    keyExtractor={(item, index) => item.id}
                    renderItem={({ item }) => (

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <View style={style.itemContainer}>
                                <Image style={style.imageList} source={item.src}></Image>
                                <View style={style.listsong}>
                                    <Text style={style.itemText}>{item.name}</Text>
                                    <Text style={style.numOfsong}>{item.numOfsong}</Text>
                                </View>
                            </View>
                            <TouchableOpacity onPress={() => this.setState({ visible: true, dataSong: item })} >
                                <MaterialIcons name="more-horiz" size={26} style={{ marginHorizontal: 10 }}></MaterialIcons>
                            </TouchableOpacity>
                        </View>
                    )
                    }
                />
                <Modal
                    // style={{position:'absolute',bottom:30}}
                    visible={this.state.visible}
                    onTouchOutside={() => {
                        this.setState({ visible: false });
                    }}>
                    <View style={{ height: 200, width: 380, backgroundColor: 'white' }}>
                        <ModalContent>
                            <View style={{ flexDirection: 'row' }}>
                                <Image style={style.imageList} source={this.state.dataSong.src}></Image>
                                <View style={style.listsong}>
                                    <Text style={style.itemText}>{this.state.dataSong.name}</Text>
                                    <Text style={style.numOfsong}>{this.state.dataSong.numOfsong}</Text>
                                </View>
                                <TouchableOpacity style={{ position: 'absolute', right: 10 }} onPress={() => { this.setState({ visible: false }) }}>
                                    <FontAwesome name="times" size={20} ></FontAwesome>
                                </TouchableOpacity>
                            </View>

                            <View style={style.divider} />
                            {/* <View style={{flexDirection:'row'}}>
                                <MaterialIcons name="share" size={24} color="gray"></MaterialIcons>
                                <Text style={style.itemText}>Share</Text>

                            </View> */}

                        </ModalContent>
                    </View>
                </Modal>
            </View>
        )
    }
}


class PlaylistScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            search: '',
            visible: false
        }
    }
    render() {
        return (
            <View style={style.screenContainer}>
                <View style={style.topHeader}>
                    <TouchableOpacity
                        onPress={() => {
                        }} >
                        <FontAwesome name="angle-left" size={26} color="#1e1e1e" />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Playlist</Text>
                    <MaterialIcons name="add" size={26} color="red"></MaterialIcons>
                </View>

                <View style={style.header}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <FontAwesome style={style.search} name="search" size={24} color="#969696" />
                        <TextInput value={this.state.search} onChangeText={(search) => this.setState({ search })} style={style.inputText} placeholder="Search for..." />

                    </View>
                    <FontAwesome name="times" size={20} style={{ marginRight: 15 }}></FontAwesome>
                </View>

                <View style={style.bodyContainer}>
                    <ScrollView>
                        <ListSongItem visible={this.state.visible} />
                    </ScrollView>
                </View>

                <View style={{ alignItems: 'center', marginVertical: 15 }}>
                    <LinearGradient colors={['#f57d73', '#f5bb8C']} style={style.ViewbtnCreate}>
                        <MaterialIcons name="add" size={20} color="white" ></MaterialIcons>
                        <Text style={style.btnCreate}>Create Playlist</Text>
                    </LinearGradient>
                </View>
            </View>

        )
    }
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    divider: {
        height: 10,
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
        backgroundColor: 'white'
    },
    topHeader: {
        flexDirection: 'row',
        marginHorizontal: 5,
        marginVertical: 15,
        justifyContent: 'space-between'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 5,
        marginVertical: 15,
        backgroundColor: '#eeeeee',
        alignItems: 'center'
    },
    screenContainer: {
        flex: 1,
        backgroundColor: 'white',

    },
    inputContainer: {
        backgroundColor: '#aaaaaa',
        flexDirection: 'row',
        flex: 1,
        marginLeft: 10,
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 2,
    },
    inputText: {
        color: '#969696',
        fontSize: 18,
        fontWeight: '500',
    },
    itemText: {

        color: '#1e1e1e',
        fontFamily: 'Gill Sans',
        fontSize: 18,
        fontWeight: '500'
    },
    search: {
        marginHorizontal: 10,

    },
    bodyContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    imageList: {
        height: 50,
        width: 50,
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
    },
    itemContainer: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 5,
        alignItems: 'center',
    },
    ViewbtnCreate: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'orange',
        borderRadius: 20,
        width: ' 60%', height: 40,
        alignItems: 'center'
    },
    btnCreate: {
        marginHorizontal: 20,
        fontWeight: '500',
        fontSize: 20,
        color: 'white'


    }
});
export default PlaylistScreen;

