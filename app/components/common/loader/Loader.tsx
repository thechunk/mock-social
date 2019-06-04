import * as React from 'react';
import {PureComponent} from "react";
import {Text, View} from "react-native";
import styles from './styles';

export default class Loader extends PureComponent<ILoader> {
    render() {
        return this.props.loading ? (
            <View style={this.props.style}>
                <Text>Loading</Text>
            </View>
        ) : null;
    }
}