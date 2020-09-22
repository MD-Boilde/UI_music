import React, { useRef, useEffect, useState } from "react";
import {
    View,
    SafeAreaView,
    Text,
    Image,
    FlatList,
    Dimensions,
    Animated,
    StyleSheet, TouchableOpacity
} from "react-native";
import TrackPlayer, {
    Capability,
    useTrackPlayerEvents,
    usePlaybackState,
    TrackPlayerEvents,
    STATE_PLAYING,
    Event,
} from 'react-native-track-player';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import songs from "../assets/dataSong";
import Controller from "../components/Controller";
import SliderComp from '../components/SliderComp';

const { width, height } = Dimensions.get("window");


export default function PlayOneSong(props) {
    const datasong = props.navigation.getParam('datasong', 'some default value');
    const scrollX = useRef(new Animated.Value(0)).current;

    const slider = useRef(null);
    const isPlayerReady = useRef(false);
    const index = useRef(0);

    const [songIndex, setSongIndex] = useState(0);

    const isItFromUser = useRef(true);

    // const [datasong, setDatasong] = useState(songs)
    // for tranlating the album art
    const position = useRef(Animated.divide(scrollX, width)).current;
    const playbackState = usePlaybackState();

    useEffect(() => {
        scrollX.addListener(({ value }) => {
            const val = Math.round(value / width);

            setSongIndex(val);
        });

        TrackPlayer.setupPlayer().then(async () => {
            // The player is ready to be used
            console.log('Player ready');
            // add the array of songs in the playlist
            await TrackPlayer.reset();
            await TrackPlayer.add(datasong);
            TrackPlayer.play();
            isPlayerReady.current = true;

            await TrackPlayer.updateOptions({
                stopWithApp: false,
                alwaysPauseOnInterruption: true,
                capabilities: [
                    Capability.Play,
                    Capability.Pause,
                    Capability.SkipToNext,
                    Capability.SkipToPrevious,
                ],
            });
            //add listener on track change
            TrackPlayer.addEventListener(Event.PlaybackTrackChanged, async (e) => {
                console.log('song ended', e);

                const trackId = (await TrackPlayer.getCurrentTrack()) - 1; //get the current id

                console.log('track id', trackId, 'index', index.current);

                if (trackId !== index.current) {
                    setSongIndex(trackId);
                    isItFromUser.current = false;

                    if (trackId > index.current) {
                        goNext();
                    } else {
                        goPrv();
                    }
                    setTimeout(() => {
                        isItFromUser.current = true;
                    }, 200);
                }

                // isPlayerReady.current = true;
            });

            //monitor intterupt when other apps start playing music
            TrackPlayer.addEventListener(Event.RemoteDuck, (e) => {
                // console.log(e);
                if (e.paused) {
                    // if pause true we need to pause the music
                    TrackPlayer.pause();
                } else {
                    TrackPlayer.play();
                }
            });
        });

        return () => {
            scrollX.removeAllListeners();
            TrackPlayer.destroy();

            // exitPlayer();
        };
    }, []);

    // change the song when index changes
    useEffect(() => {
        if (isPlayerReady.current && isItFromUser.current) {
            TrackPlayer.skip(songs[songIndex].id)
                .then((_) => {
                    console.log('changed track');
                })
                .catch((e) => console.log('error in changing track ', e));
        }
        index.current = songIndex;
    }, [songIndex]);

    const exitPlayer = async () => {
        try {
            await TrackPlayer.stop();
        } catch (error) {
            console.error('exitPlayer', error);
        }
    };

    const goNext = async () => {

        slider.current.scrollToOffset({
            offset: (index.current + 1) * width,
        });

        await TrackPlayer.play();
    };
    const goPrv = async () => {
        slider.current.scrollToOffset({
            offset: (index.current - 1) * width,
        });

        await TrackPlayer.play();
    };




    //   const renderItem = ({ index, datasong }) => {



    //     return (

    //       <Animated.View
    //         style={{
    //           alignItems: 'center',
    //           width: width,
    //           transform: [
    //             {
    //               translateX: Animated.multiply(
    //                 Animated.add(position, -index),
    //                 -100,
    //               ),
    //             },
    //           ],
    //         }}>
    //         <Animated.Image
    //           source={datasong.artwork}
    //           style={{ width: 280, height: 280, borderRadius: 280 / 2 }}
    //         />
    //       </Animated.View>
    //     );
    //   };

    return (
        <View>
            {/* <TopBack/> */}
            <Animated.View style={styles.topHeader}>
                <TouchableOpacity
                    onPress={() => {
                        props.navigation.navigate('ListSongs')
                    }} >
                    <FontAwesome name="angle-left" size={26} color="#1e1e1e" />
                </TouchableOpacity>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>PlaySong</Text>
                <TouchableOpacity onPress={() => { this.setState({ visible3: true }) }}>
                    <MaterialIcons name="add" size={26} color="red"></MaterialIcons>
                </TouchableOpacity>
            </Animated.View>
            <SafeAreaView style={styles.container}>

                <SafeAreaView style={{ height: 320 }}>
                    {/* <Animated.FlatList
            ref={slider}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            data ={datasong}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              { useNativeDriver: true },
            )}
          /> */}
                    <Animated.Image
                        source={datasong.artwork}
                        style={{ width: 280, height: 280, borderRadius: 280 / 2 }}
                    />

                </SafeAreaView>
                <View>
                    <Text style={styles.title}>{datasong.title}</Text>
                    <Text style={styles.artist}>{datasong.artist}</Text>
                </View>

                <SliderComp />

                <Controller onNext={goNext} onPrv={goPrv} />

            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 28,
        textAlign: 'center',
        fontWeight: '600',
        textTransform: 'capitalize',

    },
    topHeader: {
        flexDirection: 'row',
        marginHorizontal: 10,
        marginTop: 10,
        justifyContent: 'space-between'
    },
    artist: {
        fontSize: 18,
        textAlign: 'center',

        textTransform: 'capitalize',
    },
    container: {
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: height,
        maxHeight: 600,
        marginTop: 20
    },
});