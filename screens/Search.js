import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import TabViewSong from '../components/TabViewSong';
import AlbumSong from '../assets/AlbumSong';
import ListSong from '../assets/ListSongDB';
import TabViewAlbum from '../components/TabViewAlbum';
import TabViewMV from '../components/TabViewMV';

export class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: '',

        }
    }
    render() {
        return (
            <View style={{ flex: 1,backgroundColor :'white' }}>
                <View style={{ flexDirection: 'row', marginLeft: 10, alignItems: 'center' }}>
                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.navigate('Home');
                        }} >
                        <FontAwesome name="angle-left" size={26} color="#1e1e1e" />
                    </TouchableOpacity>

                    <View style={style.header}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <FontAwesome style={style.search} name="search" size={24} color="#969696" />
                            <TextInput value={this.state.search} onChangeText={(search) => this.setState({ search })} style={style.inputText} placeholder="Search for..." />

                        </View>
                        <FontAwesome name="times" size={20} style={{ marginRight: 15 }}></FontAwesome>
                    </View>
                </View>

                <ScrollableTabView
                    style={{ marginTop: 5,flex : 1 }}
                    initialPage={0}
                    renderTabBar={() => <ScrollableTabBar />}
                >
                    <TabViewAlbum tabLabel="All" />
                    <TabViewAlbum tabLabel="Artists" />
                    <TabViewAlbum tabLabel="Playlists" />
                    <TabViewMV tabLabel="MV" />
                    <TabViewSong tabLabel="Songs" />
                </ScrollableTabView>

                
            </View>
        );
    }
}

export default Search;
const style = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        marginVertical: 15,
        backgroundColor: '#eeeeee',
        alignItems: 'center',
        flex: 1,
        borderRadius: 5
    },
    inputText: {
        color: '#969696',
        fontSize: 18,
        fontWeight: '500',
    },
    search: {
        marginHorizontal: 10,

    },
});