import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import RenderSong from './RenderSong'

const TabViewSong = () => {
    return (
        <View style={{flex : 1,backgroundColor:'white'}}>
            <View style={{borderRadius :5}}>
                 <Text style={{justifyContent:'flex-start',marginLeft:15,fontWeight:'bold',fontSize:20,paddingVertical: 15}}>VN Chart</Text>
                 </View>
            <RenderSong/>
        </View>
    )
}



const styles = StyleSheet.create({})
export default TabViewSong;