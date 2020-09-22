import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Video from 'react-native-video';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import ListSong from '../../assets/ListSongDB';
import AlbumSong from '../../assets/AlbumSong';
const data = [1, 2, 3]
const DiscoverScreen = (props) => {

    return (
        <View style={styles.screenContainer}>
            <Text style={styles.title}>Discover</Text>
            <ScrollView >
                <FlatList
                    // style={{flex : 1}}
                    data={data}
                    horizontal={true}
                    renderItem={({ item }) => (
                        <View style={{ width: 300, backgroundColor: 'gray', height: 300, marginHorizontal: 5 }}>
                            <Video source={require('../../assets/coast.mp4')}
                                // ref={(ref) => {
                                //     this.player = ref
                                //   }} 
                                controls={true}
                                poster="https://raw.githubusercontent.com/ShivamJoker/RN-Music-Player/master/assets/album-arts/faded.jpg"
                                paused={true}
                                style={styles.backgroundVideo}
                            />
                        </View>
                    )
                    }

                />
                {/* <View style={{ flexDirection: 'row' }}> */}

                {/* <View style={{ width: '85%', height: '30%', marginLeft: 5 }}>
                    <Video source={require('../../assets/SailRideLake.mp4')}
                        // ref={(ref) => {
                        //     this.player = ref
                        //   }} 
                        style={styles.backgroundVideo}
                    />
                </View> */}
                {/* </View> */}




                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 10 }}>
                    <Text style={styles.menuText}>Recommend Artist</Text>
                    <View style={{ flexDirection: 'row', marginTop: 20, marginRight: 10 }}>
                        <Text style={styles.itemText_faded}>View all</Text>
                        <FontAwesome name="angle-right" size={24} color="#c2c2c2" />
                    </View>
                </View>
                <View>
                    <FlatList
                        horizontal={true}
                        data={ListSong}
                        keyExtractor={(item, index) => item.id}
                        renderItem={({ item }) => (
                            <View style={{ flexDirection: 'row', flex: 1 }}>
                                <View style={styles.ViewArtist}>
                                    <Image style={styles.imageArtist} source={item.src}></Image>
                                    <Text style={styles.itemText}>{item.name} </Text>
                                    <Text style={styles.itemText_faded}>{item.numOfsong}</Text>
                                </View>
                            </View>
                        )}
                    />
                </View>


                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 10 }}>
                    <Text style={styles.menuText}>Ranking</Text>
                    <View style={{ flexDirection: 'row', marginTop: 20, marginRight: 10 }}>
                        <Text style={styles.itemText_faded}>View all</Text>
                        <FontAwesome name="angle-right" size={24} color="#c2c2c2" />
                    </View>
                </View>

                <View>
                    <FlatList
                        horizontal={true}
                        data={AlbumSong}
                        keyExtractor={(item, index) => item.id}
                        renderItem={({ item }) => (
                            <View style={{ flexDirection: "row", flex: 1 }}>
                                <View style={{ flexDirection: 'column', marginVertical: 15, marginHorizontal: 10, flex: 1 }}>
                                    <Image style={styles.imageSong} source={item.src}></Image>
                                    <Text style={styles.itemText}>{item.name}</Text>


                                </View>
                            </View>
                        )
                        }
                    />
                </View>

            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        backgroundColor: 'white',

    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        paddingVertical: 20, marginLeft: 10
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width: 300,
        height: 300

    },
    menuText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
        marginLeft: 10
    },
    itemText_faded: {
        color: '#c2c2c2',
        fontSize: 15,
        marginRight: 5
    },
    itemText: {
        fontSize: 16,
        textAlign: 'center'
    },
    imageRank: {
        height: 130,
        width: 130,

    },
    ViewArtist: {
        height: 130,
        width: 110,
        alignItems: 'center',
        borderColor: '#f6f6f6',
        borderWidth: 2,
        marginLeft: 15,
        marginTop: 15
    },
    imageArtist: {
        marginVertical: 10,
        height: 50,
        width: 50,
        borderRadius: 50 / 2,
        backgroundColor: 'black'
    },
    imageSong: {
        height: 130, width: 130
    }

});

export default DiscoverScreen;
