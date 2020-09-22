import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Slideshow from 'react-native-slideshow';
import Video from 'react-native-video';
import AlbumSong from '../assets/AlbumSong';
import { ScrollView, TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import Swiper from 'react-native-swiper'
import { SafeAreaView } from 'react-navigation';

// const ListAlbum =() =>(
//     <View style={{marginVertical: 10}}>
//         {/* <Image style={{}} source={require('../assets/105.jpg')}></Image> */}
//     </View>
// );

const HomeScreen = (props) => {
    return (
        <SafeAreaView style={styles.screenContainer}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 10 }}>
                <Text style={styles.title}>Music</Text>

                <TouchableHighlight>
                    <Ionicons onPress={() => { props.navigation.navigate('Search'); }}
                        name="md-search" size={26} color="orange"></Ionicons>
                </TouchableHighlight>
            </View>
            <ScrollView >
                {/* <Slideshow
                dataSource={[
                    { url : require('../assets/coast.mp4')},
                    { url: 'http://placeimg.com/640/480/any' },
                    { url: 'http://placeimg.com/640/480/any' }
                ]} /> */}
                <Swiper showsButtons={true} style={{ height: 300 }}>
                    <View >
                        <Video source={require('../assets/SailRideLake.mp4')}
                            ref={(ref) => {
                                window.onplay = ref
                            }}
                            poster="https://raw.githubusercontent.com/ShivamJoker/RN-Music-Player/master/assets/album-arts/death-bed.jpg"
                            controls={true}
                            paused={true}
                            style={styles.backgroundVideo}
                        />
                    </View>
                    <View >
                        <Video source={require('../assets/coast.mp4')}
                            // ref={(ref) => {
                            //     this.player = ref
                            //   }} 
                            poster="https://raw.githubusercontent.com/ShivamJoker/RN-Music-Player/master/assets/album-arts/faded.jpg"
                            controls={true}
                            paused={true}
                            style={styles.backgroundVideo}
                        />
                    </View>

                </Swiper>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 10 }}>
                    <Text style={styles.menuText}>Popular Album</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10, marginTop: 20, }}>
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
                                <View style={{ flexDirection: 'column', marginVertical: 15, marginHorizontal: 20 }}>
                                    <Image style={styles.imageAlbum} source={item.src}></Image>
                                    <Text style={styles.itemText}>{item.name}</Text>
                                    <Text style={styles.itemText_faded}>{item.auth}</Text>

                                </View>
                            </View>
                        )
                        }
                    />
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 10 }}>
                    <Text style={styles.menuText}>New Creation</Text>
                    <View style={{ flexDirection: 'row', marginTop: 20, marginRight: 10 }}>
                        <Text style={styles.itemText_faded}>View all</Text>
                        <FontAwesome name="angle-right" size={24} color="#c2c2c2" />
                    </View>
                </View>

                <ScrollView horizontal={true}>
                    <FlatList contentContainerStyle={{ alignSelf: 'flex-start' }}
                        numColumns={AlbumSong.length / 2}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        data={AlbumSong}
                        keyExtractor={(item, index) => item.id}
                        renderItem={({ item }) => (
                            // <View style={{ flexDirection: "row", flex: 1 }}>
                            <View style={{ flex: 1, flexDirection: 'row', marginVertical: 15, marginHorizontal: 20 }}>
                                <Image style={styles.imageCreation} source={item.src}></Image>
                                <View style={{ marginLeft: 10 }}>
                                    <Text style={styles.itemText}>{item.name}</Text>
                                    <Text style={styles.itemText_faded}>{item.auth}</Text>
                                </View>

                            </View>
                            // </View>
                        )
                        }
                    />
                </ScrollView>
            </ScrollView>
        </SafeAreaView>
    )

}

export default HomeScreen;

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        backgroundColor: 'white',

    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        paddingVertical: 20,
        marginLeft: 10
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
    },
    imageAlbum: {
        height: 130,
        width: 130,

    },
    imageCreation: {
        height: 40,
        width: 40,
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width: '100%',
        height: 300

    },
})
