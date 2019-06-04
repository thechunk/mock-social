import * as React from 'react';
import {PureComponent} from "react";
import {FlatList, GestureResponderEvent} from "react-native";
import withUserAlbumsData from "../../hoc/withUserAlbumsData";
import AlbumListCell from "./AlbumListCell";
import withNavigationParamsAsProps from "../../hoc/withNavigationParamsAsProps";
import {NavigationInjectedProps} from "react-navigation";
import styles, {inherited} from "./styles";

class AlbumList extends PureComponent<IAlbumList & NavigationInjectedProps & IWithUserAlbumsDataProps &
    IWithUserAlbumsDataOptionalProps> {
    navigateToPhotoGrid(album: IAlbum) {
        return (event: GestureResponderEvent) => {
            this.props.navigation.navigate('PhotoGrid', { id: album.id } as IPhotoGrid)
        }
    }

    render() {
        return (
            <FlatList data={this.props.albums} keyExtractor={v => v.id.toString()} renderItem={v => (
                <AlbumListCell
                    key={v.index}
                    id={v.item.id}
                    title={v.item.title}
                    cellStyle={[inherited.cell, styles.cell]}
                    imageStyle={styles.image}
                    titleStyle={[inherited.title]}
                    subtitleStyle={[inherited.subtitle]}
                    onPress={this.navigateToPhotoGrid(v.item)} />
            )} />
        );
    }
}

export default withNavigationParamsAsProps(withUserAlbumsData(AlbumList));