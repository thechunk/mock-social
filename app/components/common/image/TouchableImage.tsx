import * as React from 'react';
import {PureComponent} from "react";
import {Image, ImageProps, TouchableOpacity, TouchableOpacityProps} from "react-native";
import styles from './styles';

export default class TouchableImage extends PureComponent<ImageProps & TouchableOpacityProps> {
    render() {
        return (
            <TouchableOpacity {...this.props as TouchableOpacityProps} style={this.props.style}>
                <Image {...this.props as ImageProps} style={styles.image} />
            </TouchableOpacity>
        )
    }
}