import React from 'react';
import {createStackNavigator} from 'react-navigation';
import UserList from "./UserList";
import withUserListData from "../hoc/withUserListData";

const Navigator = createStackNavigator({
    UserList: {
        screen: () => {
            const WrappedUserList = withUserListData(UserList);
            return <WrappedUserList />
        }
    }
});
export default Navigator;
