import React, {PureComponent} from 'react';
import {TitleSubtitleListCell} from '../common/list';
import withUserListData from '../../hoc/withUserListData';
import {FlatList, GestureResponderEvent} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {NavigationScreenProps, withNavigation} from 'react-navigation';
import {inherited} from './styles';
import {Loader} from "../common/loader/index";
import g, {Insets, Color} from "../../styles/global";

class UserList extends PureComponent<IWithUserListDataProps & NavigationScreenProps> {
    navigateToDetail(user: IUser) {
        return (event: GestureResponderEvent) => {
            this.props.navigation.navigate('UserDetail',
                { hydrate: user, id: user.id } as IWithUserDataOptionalProps)
        }
    }

    render() {
        return this.props.loading ? <Loader loading={this.props.loading} style={inherited.loader} /> : (
            <FlatList
                contentContainerStyle={g.scrollViewHeaderOffset}
                scrollIndicatorInsets={Insets.ScrollViewWithFloatingHeader}
                data={this.props.users}
                keyExtractor={v => v.id.toString()}
                renderItem={v => (
                    <TitleSubtitleListCell
                        key={v.index}
                        title={v.item.username}
                        subtitle={v.item.name}
                        rightAccessory={() => (
                            <Icon name="ios-arrow-dropright" size={30} color={Color.SecondaryAccent} />
                        )}
                        onPress={this.navigateToDetail(v.item)}
                        cellStyle={[inherited.cell]}
                        titleStyle={[inherited.title]}
                        subtitleStyle={[inherited.subtitle]} />
                )} />
        );
    }
}

export default withNavigation(withUserListData(UserList));