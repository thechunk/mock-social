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
import {MapView} from "../map-viewer/index";
import {BlurView} from '@react-native-community/blur';
import g, {Color} from '../../styles/global';
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
    headerTintColor: Color.PrimaryDarkAccent,
    headerTransparent: true
};

const Navigator = createStackNavigator({
    UserList: {
        screen: UserList,
        navigationOptions: {title: 'Users', ...blurredHeaderOptions}
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
        navigationOptions: {title: 'Albums', ...blurredHeaderOptions}
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
    },
    MapView: {
        screen: MapView,
        navigationOptions: ({navigation}: NavigationInjectedProps) => ({
            title: `${navigation.getParam('hydrate').address.suite} ${navigation.getParam('hydrate').address.street}`,
            ...blurredHeaderOptions
        })
    }
});
export default Navigator;
