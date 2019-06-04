import React, {ComponentType, FC, useEffect, useState} from 'react';
import {AlbumsApi} from '../classes/Api';

const withUserAlbumsData = <P extends IWithUserAlbumsDataProps>(Component: ComponentType<P>):
    FC<HocOptional<P, IWithUserAlbumsDataProps> & IWithUserAlbumsDataOptionalProps> =>
    (props: HocOptional<P, IWithUserAlbumsDataProps> & IWithUserAlbumsDataOptionalProps) => {
        const [albums, setAlbums] = useState<Array<IAlbum>>([]);
        const [loading, setLoading] = useState<boolean>(true);
        useEffect(() => {
            if (props.id) {
                AlbumsApi.getAllByUserId(props.id).then(setAlbums).then(() => setLoading(false));
            }
        }, [props.id]);

        return (
            <Component {...props as P & IWithUserAlbumsDataOptionalProps} albums={albums} loading={loading} />
        );
    };

export default withUserAlbumsData;
