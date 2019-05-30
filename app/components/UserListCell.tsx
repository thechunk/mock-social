import React, {PureComponent} from 'react';
import {Text} from 'react-native';

interface IUserListCell {
    key: number,
    title: String
}
class UserListCell extends PureComponent<IUserListCell> {
    render() {
        return <Text>{this.props.title}</Text>
    }
}

export default UserListCell;
