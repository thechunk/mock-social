import * as React from 'react';
import {PureComponent} from 'react';
import AlbumContainer from '../common/album-container/AlbumContainer';
import styles from './styles';
import {BlankImageUri} from "../../styles/global";
import LoadedImage from "../common/image/LoadedImage";

export default class PhotoHero extends PureComponent<IPhotoHero> {
    render() {
        return (
            <AlbumContainer
                userId={this.props.userId}
                limit={1}
                renderItem={v => <LoadedImage
                    style={styles.photoHero}
                    source={{uri: v.url}}
                    defaultSource={{uri: BlankImageUri}} />} />
        )
    }
}
