import React, {PureComponent} from 'react';
import {Text} from 'react-native';
import ListCell from '../common/list/ListCell';
import {inherited} from "./styles";

class UserListCell extends PureComponent<IUserListCell> {
    render() {
        return (
            <ListCell
                onPress={this.props.onPress}
                containerStyle={inherited.cellOuter}
                cellStyle={this.props.cellStyle}>
                <Text style={this.props.titleStyle}>{this.props.title}</Text>
                {this.props.subtitle && this.props.subtitle.length > 0
                    ? <Text style={this.props.subtitleStyle}>{this.props.subtitle}</Text>
                    : null
                }
            </ListCell>
        );
    }
}

export default UserListCell;
