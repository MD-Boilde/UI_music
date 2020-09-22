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
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import Modal, { SlideAnimation, ModalContent } from 'react-native-modals';
import songs from '../assets/dataSong';
import RenderSong from '../components/RenderSong';




class ListSongScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            search: '',
            visible3: false,

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
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Songs</Text>
                    <TouchableOpacity onPress={() => { this.setState({visible3 : true})}}>
                        <MaterialIcons name="add" size={26} color="red"></MaterialIcons>
                        </TouchableOpacity>
                </View>

                <View style={style.header}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <FontAwesome style={style.search} name="search" size={24} color="#969696" />
                        <TextInput value={this.state.search} 
                        onChangeText={(search) => this.setState({ search })} style={style.inputText} placeholder="Search for..." />

                    </View>
                    <FontAwesome name="times" size={20} style={{ marginRight: 15 }}></FontAwesome>
                </View>
                <View>
                <View style={{ flexDirection:'row',justifyContent:'space-between', marginVertical: 15,marginHorizontal :10,alignItems:'center' }}>
                    <Text style={{fontSize: 20}}>All Song</Text>
                    <LinearGradient colors={['#f57d73', '#f5bb8C']} style={style.ViewbtnCreate}>
                        <MaterialIcons name="play-circle-outline" size={25} color="white" ></MaterialIcons>
                        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('PlayMusic')}}>
                            <Text style={style.btnCreate}>Play</Text>
                            </TouchableOpacity>
                    </LinearGradient>
                </View>
                </View>
                <View style={style.bodyContainer}>
                   
                        <RenderSong navigation={this.props.navigation}/>
                    
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
        height: 15,
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
        fontWeight: '500',
        marginHorizontal: 10
    },
    itemTextModal: {

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
        color: 'gray', marginLeft: 10
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
        width: ' 25%', height: 40,
        alignItems :'center',
        
        
    },
    btnCreate: {
        marginHorizontal: 10,
        fontWeight: '500',
        fontSize: 20,
        color: 'white'

    },
    btnCancel :{
        fontWeight: '500',
        fontSize: 20,
        color :'#f47468',marginRight :10
    },
    ViewDelete :{
        flexDirection : 'row',
        justifyContent :'flex-end',
        alignItems : 'center',
        marginTop :20
    }
});
export default ListSongScreen;

