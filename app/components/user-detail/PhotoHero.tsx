import * as React from 'react';
import {PureComponent} from 'react';
import {Image} from 'react-native';
import AlbumContainer from '../common/album-container/AlbumContainer';
import styles from './styles';

export default class PhotoHero extends PureComponent<IPhotoHero> {
    render() {
        return (
            <AlbumContainer
                userId={this.props.userId}
                limit={1}
                renderItem={v => <Image style={styles.photoHero} source={{uri: v.url}}/>} />
        )
    }
}
