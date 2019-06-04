import * as React from 'react';
import {PureComponent} from 'react';
import {View} from 'react-native';

export default class TabBar extends PureComponent<ITabBar> {
    render() {
        return (
            <View style={this.props.style}>
                {this.props.children}
            </View>
        );
    }
}
