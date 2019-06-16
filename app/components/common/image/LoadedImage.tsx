import * as React from 'react';
import {PureComponent} from "react";
import {Animated, Image, ImageProps, View} from "react-native";

interface ILoadedImageState {
    opacity: Animated.Value
}
export default class LoadedImage extends PureComponent<ImageProps, ILoadedImageState> {
    constructor(props: ImageProps) {
        super(props);
        this.state = {opacity: new Animated.Value(0)};
        this.onImageLoaded = this.onImageLoaded.bind(this);
    }

    onImageLoaded() {
        Animated.timing(this.state.opacity, {
            toValue: 1,
            duration: 200
        }).start();
    }

    render() {
        return (
            <Animated.View style={[this.props.style, {opacity: this.state.opacity}]}>
                <Image {...this.props as ImageProps} onLoadEnd={this.onImageLoaded} />
            </Animated.View>
        );
    }
}