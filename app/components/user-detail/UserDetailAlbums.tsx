import * as React from 'react';
import {FC, useState} from 'react';
import {View, Text, TouchableHighlight, GestureResponderEvent, Dimensions} from 'react-native';
import AlbumContainer from '../common/album-container/AlbumContainer';
import styles from './styles';
import TouchableImage from "../common/image/TouchableImage";
import {NavigationScreenProps, withNavigation} from "react-navigation";
import * as g from '../../styles/global';

const {width} = Dimensions.get('window');

const UserDetailAlbums: FC<IUserDetailAlbums & NavigationScreenProps> =
    (props: IUserDetailAlbums & NavigationScreenProps) => {
        const limit = 4;
        const imageWidth = Math.floor(width / limit)
            - g.Dimensions.ElementsHorizontalPadding
            - g.Dimensions.Offset / limit;

        const [albums, setAlbums] = useState<Array<IAlbum>>([]);
        const withAlbums = (albums: Array<IAlbum>) => {
            setAlbums(albums);
        };

        const onTapAlbum = (id: number, album: IAlbum) => (event: GestureResponderEvent) => {
            props.navigation.navigate('PhotoGrid', {id, hydrate: album});
        };
        const onTapMore = (id: number) => (event: GestureResponderEvent) => {
            props.navigation.navigate('AlbumList', {id});
        };

        return (
            <View style={[styles.userAlbumsContainer, {height: imageWidth}]}>
                <AlbumContainer
                    userId={props.userId}
                    limit={limit}
                    withAlbums={withAlbums}
                    renderItem={(photo: IPhoto, album: IAlbum)=> (
                        <TouchableImage
                            key={photo.id}
                            style={[g.default.roundedBorder, {width: imageWidth, height: imageWidth}]}
                            onPress={onTapAlbum(photo.albumId, album)}
                            source={{uri: photo.url}}/>
                    )} />
                {albums.length > limit
                    ? (
                        <TouchableHighlight
                            underlayColor={g.Color.White}

                            style={[styles.userAlbumsMore, g.default.roundedBorder, {width: imageWidth, height: imageWidth}]}
                            onPress={onTapMore(props.userId)}>
                            <>
                                <Text style={styles.userAlbumsMoreCount}>{albums.length - limit + 1}</Text>
                                <Text style={styles.userAlbumsMoreText}>more&hellip;</Text>
                            </>
                        </TouchableHighlight>
                    )
                    : null}
            </View>
        )
    }
export default withNavigation(UserDetailAlbums);