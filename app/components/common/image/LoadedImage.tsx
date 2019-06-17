import * as React from 'react';
import {PureComponent} from "react";
import {ActivityIndicator, Animated, Image, ImageProps} from "react-native";
import styles from './styles';
import {Loader} from "../loader/index";

export default class LoadedImage extends PureComponent<ImageProps & ILoadedImage, ILoadedImageState> {
    constructor(props: ImageProps) {
        super(props);
        this.state = {opacity: new Animated.Value(0), loading: true};
        this.onImageLoaded = this.onImageLoaded.bind(this);
    }

    onImageLoaded() {
        Animated.timing(this.state.opacity, {
            toValue: 1,
            duration: 200
        }).start(() => this.setState(state => ({...state, loading: false})));
    }

    render() {
        return (
            <>
                {this.state.loading && this.props.showSpinner
                    ? <Loader loading={true} style={styles.imageLoader} />
                    : null}
                <Animated.View style={[this.props.style, {opacity: this.state.opacity}]}>
                    <Image {...this.props as ImageProps} onLoadEnd={this.onImageLoaded}/>
                </Animated.View>
            </>
        );
    }
}