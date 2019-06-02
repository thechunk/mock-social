import React, {ComponentType, FC, useEffect, useState} from 'react';
import {AlbumsApi} from '../classes/Api';

const withUserAlbumsData = <P extends IWithUserAlbumsDataProps>(Component: ComponentType<P>):
    FC<HocOptional<P, IWithUserAlbumsDataProps> & IWithUserAlbumsDataOptionalProps> =>
    (props: HocOptional<P, IWithUserAlbumsDataProps> & IWithUserAlbumsDataOptionalProps) => {
        const [albums, setAlbums] = useState<Array<IAlbum>>([]);
        useEffect(() => {
            if (props.id) {
                AlbumsApi.getAllByUserId(props.id).then(setAlbums);
            }
        }, [props.id]);

        return (
            <Component {...props as P & IWithUserAlbumsDataOptionalProps} albums={albums} />
        );
    };

export default withUserAlbumsData;
