import React, {PureComponent} from 'react';
import UserListCell from './UserListCell';
import withUserListData from '../../hoc/withUserListData';
import {FlatList, GestureResponderEvent} from 'react-native';
import {NavigationScreenProps, withNavigation} from 'react-navigation';
import styles, {inherited} from './styles';

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
                    title={v.item.username}
                    subtitle={v.item.name}
                    onPress={this.navigateToDetail(v.item)}
                    cellStyle={[inherited.cell]}
                    titleStyle={[inherited.title]}
                    subtitleStyle={[inherited.subtitle]} />
            )} />
        )
    }
}

export default withNavigation(withUserListData(UserList));