import React, {PureComponent} from 'react';
import UserListCell from "./UserListCell";
import {IWithUserListDataProps} from "../hoc/withUserListData";

class UserList extends PureComponent<IWithUserListDataProps> {
    render() {
        return this.props.users != null
            ? this.props.users.map(v => <UserListCell key={v.id} title={v.name} />)
            : null;
    }
}

export default UserList;