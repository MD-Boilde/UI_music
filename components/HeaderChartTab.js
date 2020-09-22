import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import TabViewChart from './Controller';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';

const HeaderChartTab = ( props) => {
    return (
        <View style={styles.container}>
            <ImageBackground style={{ flex: 1,opacity : 0.8,}} source={{ uri: "http://placeimg.com/640/480/any" }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 15, marginHorizontal: 10 }}>
                    <FontAwesome name="angle-left" size={26} color="white"></FontAwesome>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableHighlight >
                            <FontAwesome onPress={() => {
                                props.navigation.navigate('Search');
                            }} name="search" size={24} color="white" style={{opacity:1}}/>
                        </TouchableHighlight>
                        <MaterialIcons name="more-horiz" size={24} style={{ marginHorizontal: 10 }} color="white"></MaterialIcons>
                    </View>
                </View>

                <View style={{ alignSelf: 'center', alignItems: 'center', marginTop: 20 }}>
                    {/* <Text style={styles.TextType}>{type}</Text> */}
                    <Text style={styles.TextType}>US-UK Chart</Text>
                    <View style={styles.ViewTime}>
                        {/* <Text style={styles.TextTime}>{time}</Text> */}
                        <Text style={styles.TextTime}>Week 1-2019</Text>

                    </View>
                </View>


            </ImageBackground>


        </View>
    )
}

export default HeaderChartTab;

const styles = StyleSheet.create({
    container: {
       
        height: 250,
        width: '100%'
    },
    TextType: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 25
    },
    ViewTime: {
        marginTop: 10,
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 5,
        alignItems: 'center'
    },
    TextTime: {
        fontSize: 16,
        color: "white",
        paddingHorizontal: 35,
        paddingVertical: 8
    }
})
