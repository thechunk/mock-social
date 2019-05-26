import React from 'react';
import {IUsersApi, IUser} from "../classes/Api";
import UserListCell from "./UserListCell";

interface IUserList {
    api: IUsersApi
}
interface IUserListState {
    data: Array<IUser>
}
class UserList extends React.Component<IUserList, IUserListState> {
    constructor(props: IUserList) {
        super(props);
        this.state = {data: []};
    }

    componentDidMount(): void {
        this.props.api.getAll()
            .then((resp) => {
                this.setState({data: resp})
            })
            .catch(console.warn)
    }

    render() {
        return this.state.data.map((v) => <UserListCell key={v.id} title={v.name} />);
    }
}

export default UserList;
