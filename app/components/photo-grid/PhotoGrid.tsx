import * as React from 'react';
import {PureComponent} from "react";
import {FlatList, Dimensions, PixelRatio} from "react-native";
import withUserPhotosData from "../../hoc/withAlbumPhotosData";
import PhotoGridCell from "./PhotoGridCell";
import {NavigationInjectedProps} from "react-navigation";
import withNavigationParamsAsProps from "../../hoc/withNavigationParamsAsProps";
import {default as g, Insets} from '../../styles/global';

class PhotoGrid extends PureComponent<IPhotoGrid & NavigationInjectedProps & IWithUserPhotosDataProps> {
    private columns: number = 4;
    private imageWidth: number = 0;

    constructor(props: IPhotoGrid & NavigationInjectedProps & IWithUserPhotosDataProps) {
        super(props);
        this.onCellPress = this.onCellPress.bind(this);
    }

    componentDidMount(): void {
        const {width} = Dimensions.get('window');
        this.imageWidth = PixelRatio.roundToNearestPixel(width / this.columns);
    }

    onCellPress(photo: IPhoto) {
        return () => this.props.navigation.navigate('ImageViewer',
            {hydrate: photo} as IImageViewerScreen);
    }

    render() {
        return (
            <FlatList
                data={this.props.photos}
                numColumns={this.columns}
                keyExtractor={v => v.id.toString()}
                contentContainerStyle={g.scrollViewHeaderOffset}
                scrollIndicatorInsets={Insets.ScrollViewWithFloatingHeader}
                maxToRenderPerBatch={3}
                renderItem={v => (
                    <PhotoGridCell
                        onPress={this.onCellPress(v.item)}
                        url={v.item.url}
                        style={{width: this.imageWidth, height: this.imageWidth}} />
            )} />
        );
    }
}

export default withNavigationParamsAsProps(withUserPhotosData(PhotoGrid));