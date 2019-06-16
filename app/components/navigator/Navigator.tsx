import React from 'react';
import {
    createStackNavigator,
    NavigationInjectedProps,
    NavigationScreenConfig,
    NavigationScreenOptions
} from 'react-navigation';
import {UserList} from '../user-list/index';
import {UserDetail} from '../user-detail/index';
import {PhotoGrid} from '../photo-grid/index';
import {AlbumList} from '../album-list/index';
import {ImageViewer} from '../image-viewer/index';
import {BlurView} from '@react-native-community/blur';
import g from '../../styles/global';
import styles from './styles';
import {View} from "react-native";

const blurredHeaderOptions: NavigationScreenConfig<NavigationScreenOptions> = {
    headerBackground: (
        <View style={[g.flex1, styles.stackHeader]}>
            <BlurView
                blurType='xlight'
                style={g.flex1} />
        </View>
    ),
    headerTransparent: true
};

const Navigator = createStackNavigator({
    UserList: {
        screen: UserList,
        navigationOptions: { title: 'Users' }
    },
    UserDetail: {
        screen: UserDetail,
        navigationOptions: ({navigation}: NavigationInjectedProps) => ({
            title: navigation.getParam('hydrate').username,
            ...blurredHeaderOptions
        })
    },
    AlbumList: {
        screen: AlbumList,
        navigationOptions: { title: 'Albums' }
    },
    PhotoGrid: {
        screen: PhotoGrid,
        navigationOptions: ({navigation}: NavigationInjectedProps) => ({
            title: navigation.getParam('hydrate').title,
            ...blurredHeaderOptions
        })
    },
    ImageViewer: {
        screen: ImageViewer,
        navigationOptions: ({navigation}: NavigationInjectedProps) => ({
            title: navigation.getParam('hydrate').title,
            ...blurredHeaderOptions
        })
    }
});
export default Navigator;
