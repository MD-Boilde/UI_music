import React from 'react';
import { View, Text } from 'react-native';
import HeaderChartTab from '../../components/HeaderChartTab';
import TabViewChart from '../../components/Controller';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import TabViewAlbum from '../../components/TabViewAlbum';
import TabViewMV from '../../components/TabViewMV';
import TabViewSong from '../../components/TabViewSong';
const ChartScreen = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1/3 }}>
                <HeaderChartTab />
            </View>

            <ScrollableTabView
                style={{  flex: 2/3,marginTop : -15}}
                initialPage={0}
                tabBarActiveTextColor ="#ffffff"
                tabBarInactiveTextColor ="#cccccc"
                tabBarUnderlineStyle ={{backgroundColor :'#908a86'}}
                tabBarTextStyle={{fontSize : 16,fontWeight :'bold'}}
                renderTabBar={() => <ScrollableTabBar />}
            >
                <TabViewAlbum tabLabel="Album" />
                <TabViewMV tabLabel="MV" />
                <TabViewSong tabLabel="Songs" />
                {/* <Text tabLabel='Tab #1'>My</Text>
                <Text tabLabel='Tab #2'>favorite</Text>
                <Text tabLabel='Tab #3'>project</Text> */}

            </ScrollableTabView>


        </View>
    )
}

export default ChartScreen;
