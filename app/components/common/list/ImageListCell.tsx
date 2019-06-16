import React, {PureComponent} from 'react';
import {Text, View} from 'react-native';
import ListCell from './ListCell';
import WrappedWithPhotos from "../album-container/WrappedWithPhotos";
import styles, {inherited} from "../../album-list/styles";
import LoadedImage from "../image/LoadedImage";

class ImageListCell extends PureComponent<IImageListCell> {
    render() {
        return (
            <ListCell
                onPress={this.props.onPress}
                containerStyle={inherited.cellOuter}
                cellStyle={this.props.cellStyle}>
                <WrappedWithPhotos
                    id={this.props.id}
                    renderItem={v => <LoadedImage style={this.props.imageStyle} source={{uri: v.url}} />} />
                <View style={styles.cellTextView}>
                    <Text style={this.props.titleStyle}>{this.props.title}</Text>
                    {this.props.subtitle && this.props.subtitle.length > 0
                        ? <Text style={this.props.subtitleStyle}>{this.props.subtitle}</Text>
                        : null
                    }
                </View>
            </ListCell>
        );
    }
}

export default ImageListCell;