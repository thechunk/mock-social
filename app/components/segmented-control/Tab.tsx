import * as React from 'react';
import {PureComponent} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import SegmentedControlContext from './SegmentedControlContext';

export default class Tab extends PureComponent<ITab> {
    static contextType = SegmentedControlContext;

    constructor(props: ITab) {
        super(props);
        this.onPress = this.onPress.bind(this);
    }

    onPress() {
        this.context.setSelectedTab(this.props.id)
    }

    render() {
        const active = this.context.selectedTab === this.props.id;
        return (
            <TouchableOpacity
                onPress={this.onPress}
                style={[this.props.inactiveStyle, active ? this.props.activeStyle : null]}>
                <Text
                    style={[this.props.inactiveTextStyle, active ? this.props.activeTextStyle : null]}>
                    {this.props.title}
                </Text>
            </TouchableOpacity>
        );
    }
}

