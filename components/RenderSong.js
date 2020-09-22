import React, { Component,useState } from 'react';
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
// import { useNavigation } from '@react-navigation/native';
// class RenderSong extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             visible: false,
//             visible2: false,
//             dataSong: {},
//             data : {}
//         }
//     }
//     render() {
//         return (
//             <View style={{ flex: 1 }}>
//                 <FlatList
//                     data={songs}
//                     keyExtractor={(item, index) => item.id}
//                     renderItem={({ item }) => (

//                         <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
//                             <TouchableOpacity onPress={()=>{this.props.navigation.navigate('PlayMusic',{data : item})}} style={style.itemContainer}>
                                
//                                 <Image  style={style.imageList} source={item.artwork}></Image>
                                
//                                 <View style={style.listsong}>
//                                     <Text style={style.itemText}>{item.title}</Text>
//                                     <Text style={style.numOfsong}>{item.artist}</Text>
//                                 </View>
//                                 </TouchableOpacity>
//                             <TouchableOpacity onPress={() => this.setState({ visible: true, dataSong: item })} >
//                                 <MaterialIcons name="more-horiz" size={26} style={{ marginHorizontal: 10 }}></MaterialIcons>
//                             </TouchableOpacity>
//                         </View>
//                     )
//                     }
//                 />
//             </View>
//         )
//     }
// }

const RenderSong = ({navigation}) => {
    // const navigation = useNavigation();
    const [datasong, setDatasong] = useState(null)
    return (
        <View style={{ flex: 1 }}>
        <FlatList
            data={songs}
            keyExtractor={(item, index) => item.id}
            renderItem={({ item }) => (

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <TouchableOpacity onPress={()=>{navigation.navigate('PlayOneSong',{datasong : item})}} style={style.itemContainer}>
                        
                        <Image  style={style.imageList} source={item.artwork}></Image>
                        
                        <View style={style.listsong}>
                            <Text style={style.itemText}>{item.title}</Text>
                            <Text style={style.numOfsong}>{item.artist}</Text>
                        </View>
                        </TouchableOpacity>
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


export default RenderSong;
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