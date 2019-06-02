import React, {PureComponent} from 'react';
import {GestureResponderEvent, Text} from 'react-native';
import ListCell from "../list/ListCell";

interface IUserListCell {
    key: number,
    title: String,
    onPress?: (event: GestureResponderEvent) => void
}
class UserListCell extends PureComponent<IUserListCell> {
    render() {
        return (
            <ListCell onPress={this.props.onPress}>
                <Text>{this.props.title}</Text>
            </ListCell>
        );
    }
}

export default UserListCell;
