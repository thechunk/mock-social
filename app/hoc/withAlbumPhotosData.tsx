import React, {ComponentType, FC, useEffect, useState} from 'react';
import {PhotosApi} from '../classes/Api';

const withUserPhotosData = <P extends IWithUserPhotosDataProps>(Component: ComponentType<P>):
    FC<HocOptional<P, IWithUserPhotosDataProps> & IWithUserPhotosDataOptionalProps> =>
    (props: HocOptional<P, IWithUserPhotosDataProps> & IWithUserPhotosDataOptionalProps) => {
        const [photos, setPhotos] = useState<Array<IPhoto>>([]);
        const [loading, setLoading] = useState<boolean>(true);
        useEffect(() => {
            if (props.id) {
                PhotosApi.getAllByAlbumId(props.id).then(setPhotos).then(() => setLoading(false));
            }
        }, [props.id]);

        return (
            <Component {...props as P & IWithUserPhotosDataOptionalProps} photos={photos} loading={loading} />
        );
    };

export default withUserPhotosData;
