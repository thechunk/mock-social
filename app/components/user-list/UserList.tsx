import React, {PureComponent} from 'react';
import UserListCell from "./UserListCell";
import withUserListData, {IWithUserListDataProps} from "../../hoc/withUserListData";
import {FlatList, GestureResponderEvent} from "react-native";
import {NavigationScreenProps, withNavigation} from "react-navigation";
import {IWithUserDataOptionalProps} from "../../hoc/withUserData";

class UserList extends PureComponent<IWithUserListDataProps & NavigationScreenProps> {
    navigateToDetail(user: IUser) {
        return (event: GestureResponderEvent) => {
            this.props.navigation.navigate('UserDetail',
                { hydrate: user, id: user.id } as IWithUserDataOptionalProps)
        }
    }

    render() {
        return (
            <FlatList data={this.props.users} keyExtractor={v => v.id.toString()} renderItem={v => (
                <UserListCell
                    key={v.index}
                    title={v.item.name}
                    onPress={this.navigateToDetail(v.item)} />
            )} />
        )
    }
}

export default withNavigation(withUserListData(UserList));