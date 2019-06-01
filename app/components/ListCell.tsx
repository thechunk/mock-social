import * as React from 'react';
import {PureComponent} from "react";
import {GestureResponderEvent, TouchableOpacity, View} from "react-native";

export interface IListCell {
    onPress?: (event: GestureResponderEvent) => void;
}
export default class ListCell extends PureComponent<IListCell> {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <View>
                    {this.props.children}
                </View>
            </TouchableOpacity>
        )
    }
}