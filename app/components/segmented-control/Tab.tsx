import * as React from 'react';
import {PureComponent} from "react";
import {Text, TouchableOpacity, View} from 'react-native';
import {SegmentedControlContext} from "./SegmentedControl";

export interface ITab {
    id: number,
    title: string
}
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
        return (
            <View>
                <TouchableOpacity onPress={this.onPress}>
                    <Text>{this.context.selectedTab === this.props.id ? 'active: ' : ''}{this.props.title}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

