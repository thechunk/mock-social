import * as React from 'react';
import {PureComponent} from "react";
import TouchableImage from "../common/image/TouchableImage";

export default class PhotoGridCell extends PureComponent<IPhotoGridCell> {
    render() {
        return (
            <TouchableImage style={this.props.style} source={{uri: this.props.url}}/>
        );
    }
}