/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import LoginScreen from './screens/LoginScreen';
import PlaylistScreen from './screens/PlaylistScreen';
import TrackPlayer from 'react-native-track-player';
import PlayMusicScreen from './screens/PlayMusicScreen';
AppRegistry.registerComponent(appName, () => App);
TrackPlayer.registerPlaybackService(() => require('./service.js'));