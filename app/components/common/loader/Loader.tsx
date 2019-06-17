import * as React from 'react';
import {PureComponent} from "react";
import {ActivityIndicator, ActivityIndicatorProps, View} from "react-native";
import styles from './styles';

export default class Loader extends PureComponent<ILoader & ActivityIndicatorProps> {
    render() {
        return this.props.loading ? (
            <View style={[styles.loader, this.props.style]}>
                <ActivityIndicator size="small" {...this.props as ActivityIndicatorProps} />
            </View>
        ) : null;
    }
}