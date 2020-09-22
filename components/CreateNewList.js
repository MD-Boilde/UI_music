import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import Modal, { SlideAnimation, ModalContent } from 'react-native-modals';

class CreateNewList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Modal
                    // style={{position:'absolute',bottom:30}}
                    visible={true}
                    onTouchOutside={() => {
                        this.setState({ visible: false });
                    }}>
                    <View style={{ height: 200, width: 380, backgroundColor: 'white' }}>
                        <ModalContent>
                            <View style={{ flexDirection: 'row' }}>
                                <MaterialCommunityIcons name="playlist-play" size={26} ></MaterialCommunityIcons>
                                <Text style={style.itemText}>Confirm Delete</Text>

                                <TouchableOpacity style={{ position: 'absolute', right: 10, backgroundColor: "#e5e5e5", borderRadius: 13, height: 26, width: 26, alignItems: 'center' }} onPress={() => { this.setState({ visible: false }) }}>
                                    <FontAwesome name="times-circle-o" size={26} color="gray"></FontAwesome>
                                </TouchableOpacity>
                            </View>

                            <Text style={style.numOfsong, { marginVertical: 10 }}>You can't undo this action</Text>

                            <View style={style.divider} />
                            <View>

                                <View style={style.ViewDelete}>
                                    <Text style={style.btnCancel } onPress ={() =>this.setState({visible : false})}>Cancel</Text>
                                    <LinearGradient colors={['#f57d73', '#f5bb8C']} style={style.ViewbtnCreate}>
                                        <Text style={style.btnCreate}
                                            onPress={()=>{}}>Deletesdfghjkl</Text>
                                    </LinearGradient>
                                    
                                </View>
                            </View>

                        </ModalContent>
                    </View>
                </Modal>
        
      </View>
    );
  }
}
const style = StyleSheet.create({
    btnCreate: {
        marginHorizontal: 20,
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
    },
    ViewbtnCreate: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'orange',
        borderRadius: 20,
        width: ' 60%', height: 40,
        alignItems :'center'
        
    },
    numOfsong: {
        fontSize: 13,
        color: 'gray', marginLeft: 10
    },
    itemText: {

        color: '#1e1e1e',
        fontFamily: 'Gill Sans',
        fontSize: 18,
        fontWeight: '500',
        marginHorizontal: 10
    },
    divider: {
        height: 15,
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
        backgroundColor: 'white'
    },
})
export default CreateNewList;
