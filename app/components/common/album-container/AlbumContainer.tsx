import * as React from 'react';
import {PureComponent} from 'react';
import WrappedWithAlbums from "./WrappedWithAlbums";


export default class AlbumContainer extends PureComponent<IAlbumContainer> {
    render() {
        return (
            <WrappedWithAlbums
                id={this.props.userId}
                limit={this.props.limit}
                withAlbums={this.props.withAlbums}
                renderItem={this.props.renderItem} />
        )
    }
}
