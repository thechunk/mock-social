import React from 'react';
import {createStackNavigator} from 'react-navigation';
import UserList from "./UserList";
import {UsersApi} from "../classes/Api";

const Navigator = createStackNavigator({
    UserList: { screen: () => <UserList api={UsersApi} /> }
});
export default Navigator;
