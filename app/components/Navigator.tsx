import React from 'react';
import {createStackNavigator} from 'react-navigation';
import {UserList} from './user-list';
import {UserDetail} from './user-detail';
import {PhotoGrid} from "./photo-grid";
import {AlbumList} from "./album-list/index";

const Navigator = createStackNavigator({
    UserList: UserList,
    UserDetail: UserDetail,
    AlbumList: AlbumList,
    PhotoGrid: PhotoGrid
});
export default Navigator;
