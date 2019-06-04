import * as React from 'react';
import {PureComponent} from "react";
import {FlatList, Dimensions, PixelRatio} from "react-native";
import withUserPhotosData from "../../hoc/withAlbumPhotosData";
import PhotoGridCell from "./PhotoGridCell";
import {NavigationInjectedProps} from "react-navigation";
import withNavigationParamsAsProps from "../../hoc/withNavigationParamsAsProps";

class PhotoGrid extends PureComponent<IPhotoGrid & NavigationInjectedProps & IWithUserPhotosDataProps> {
    private columns: number = 5;
    private imageWidth: number = 0;

    componentDidMount(): void {
        const {width} = Dimensions.get('window');
        this.imageWidth = Math.floor(width / this.columns);
    }

    render() {
        return (
            <FlatList
                data={this.props.photos}
                numColumns={this.columns}
                keyExtractor={v => v.id.toString()}
                renderItem={v => (
                <PhotoGridCell
                    url={v.item.url}
                    style={{width: this.imageWidth, height: this.imageWidth}} />
            )} />
        );
    }
}

export default withNavigationParamsAsProps(withUserPhotosData(PhotoGrid));