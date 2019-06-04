import React, {PureComponent} from 'react';
import {Image, Text, View} from 'react-native';
import ListCell from '../common/list/ListCell';
import WrappedWithPhotos from "../common/album-container/WrappedWithPhotos";
import styles, {inherited} from "./styles";

class AlbumListCell extends PureComponent<IAlbumListCell> {
    render() {
        return (
            <ListCell
                onPress={this.props.onPress}
                containerStyle={inherited.cellOuter}
                cellStyle={this.props.cellStyle}>
                <WrappedWithPhotos
                    id={this.props.id}
                    renderItem={v => <Image style={this.props.imageStyle} source={{uri: v.url}} />} />
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

export default AlbumListCell;