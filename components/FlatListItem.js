import React from 'react'
import { StyleSheet, Text, View,FlatList,Image,TouchableOpacity } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AlbumSong from '../assets/AlbumSong';
import ListSong from '../assets/ListSongDB';
const FlatListItem = (props) => {
    return (
        <View style={{flex : 1}}>
            <FlatList
                    data ={ListSong}
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
                            <TouchableOpacity onPress={() => {}} >
                                <MaterialIcons name="more-horiz" size={26} style={{ marginHorizontal: 10 }}></MaterialIcons>
                            </TouchableOpacity>
                        </View>
                    )
                    }
                />
        </View>
    )
}

export default FlatListItem;

const style = StyleSheet.create({
    imageList: {
        height: 50,
        width: 50,
    },
    numOfsong: {
        fontSize: 13,
        color: 'gray', marginLeft: 10
    },
    itemContainer: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 5,
        alignItems: 'center',
    },
    listsong: {
        flexDirection: 'column',
        // alignItems : 'center',
        marginVertical: 6,
        marginHorizontal: 10
    },
    itemText: {
        color: '#1e1e1e',
        fontFamily: 'Gill Sans',
        fontSize: 18,
        fontWeight: '500',
        marginHorizontal: 10
    },
})
