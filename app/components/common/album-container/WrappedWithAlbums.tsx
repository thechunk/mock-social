import {PureComponent, default as React} from "react";
import WrappedWithPhotos from "./WrappedWithPhotos";
import withUserAlbumsData from "../../../hoc/withUserAlbumsData";

class AlbumData extends PureComponent<IAlbumData & IWithUserAlbumsDataProps> {
    componentDidUpdate(prevProps: Readonly<IAlbumData & IWithUserAlbumsDataProps>, prevState: Readonly<{}>, snapshot?: any): void {
        if (this.props.withAlbums && prevProps.albums.length !== this.props.albums.length) {
            this.props.withAlbums(this.props.albums);
        }
    }

    displayAlbums(albums: Array<IAlbum>): Array<IAlbum> {
        return albums.sort((a, b) => b.id - a.id).slice(0, this.props.limit);
    }

    render() {
        const displayAlbum = this.displayAlbums(this.props.albums);
        return this.props.renderItem ? displayAlbum.map(v => (
            <WrappedWithPhotos key={v.id} id={v.id} renderItem={this.props.renderItem} />
        )) : null;
    }
}

const WrappedWithAlbums = withUserAlbumsData(AlbumData);
export default WrappedWithAlbums;