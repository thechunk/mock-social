import * as React from 'react';
import {PureComponent} from "react";
import {ImageProps, TouchableOpacity, TouchableOpacityProps} from "react-native";
import styles from './styles';
import {BlankImageUri} from "../../../styles/global";
import LoadedImage from "./LoadedImage";

export default class TouchableImage extends PureComponent<ImageProps & TouchableOpacityProps> {
    render() {
        return (
            <TouchableOpacity {...this.props as TouchableOpacityProps} style={this.props.style}>
                <LoadedImage
                    {...this.props as ImageProps}
                    style={styles.image}
                    showSpinner={true}
                    defaultSource={{uri: BlankImageUri}} />
            </TouchableOpacity>
        )
    }
}