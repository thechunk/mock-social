import React from 'react';
import {Text} from 'react-native';

interface IUserListCell {
    title: String
}
const UserListCell: React.FunctionComponent<IUserListCell> = ({title}) => (
    <Text>{title}</Text>
);

export default UserListCell;
