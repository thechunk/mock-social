import * as React from 'react';
import {PureComponent} from 'react';
import {TouchableOpacity, View} from 'react-native';

export default class ListCell extends PureComponent<IListCell> {
    render() {
        return (
            <View style={this.props.containerStyle}>
                <TouchableOpacity style={this.props.cellStyle} onPress={this.props.onPress}>
                    {this.props.children}
                </TouchableOpacity>
            </View>
        )
    }
}