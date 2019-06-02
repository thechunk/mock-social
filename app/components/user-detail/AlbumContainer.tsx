import * as React from 'react';
import {PureComponent} from 'react';
import CopyToChildren from '../utility/CopyToChildren';
import withUserAlbumsData from '../../hoc/withUserAlbumsData';
import withUserPhotosData from '../../hoc/withAlbumPhotosData';

interface IAlbumData {
    limit: number
}
class AlbumData extends PureComponent<IAlbumData & IWithUserAlbumsDataProps> {
    displayAlbums(albums: Array<IAlbum>): Array<IAlbum> {
        return albums.sort((a, b) => b.id - a.id).slice(0, this.props.limit);
    }

    render() {
        const displayAlbum = this.displayAlbums(this.props.albums);
        return displayAlbum.map(v => (
            <CopyToChildren key={v.id} object={{id: v.id}}>{this.props.children}</CopyToChildren>
        ))
    }
}

class PhotoData extends PureComponent<IWithUserPhotosDataProps> {
    static displayPhoto(photos: Array<IPhoto>): IPhoto | undefined {
        return photos.sort((a, b) => a.id - b.id).pop();
    }

    render() {
        const displayPhoto = PhotoData.displayPhoto(this.props.photos);
        return (
            <CopyToChildren object={{source: {uri: displayPhoto ? displayPhoto.url : null}}}>
                {this.props.children}
            </CopyToChildren>
        );
    }
}

const WrappedWithAlbumData = withUserAlbumsData(AlbumData);
const WrappedWithPhotoData = withUserPhotosData(PhotoData);
export default class AlbumContainer extends PureComponent<IAlbumContainer> {
    render() {
        return (
            <WrappedWithAlbumData id={this.props.userId} limit={this.props.limit}>
                <WrappedWithPhotoData>{this.props.children}</WrappedWithPhotoData>
            </WrappedWithAlbumData>
        )
    }
}
