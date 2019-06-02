import React from 'react';
import {createStackNavigator} from 'react-navigation';
import {UserList} from './user-list';
import {UserDetail} from './user-detail';

const Navigator = createStackNavigator({
    UserList: {
        screen: UserList
    },
    UserDetail: {
        screen: UserDetail
    }
});
export default Navigator;
