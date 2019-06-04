import React, {ComponentType, FC, useEffect, useState} from 'react';
import {PostsApi} from '../classes/Api';

const withPostsData = <P extends IWithPostsDataProps>(Component: ComponentType<P>):
    FC<HocOptional<P, IWithPostsDataProps> & IWithPostsDataOptionalProps> =>
    (props: HocOptional<P, IWithPostsDataProps> & IWithPostsDataOptionalProps) => {
        const [posts, setPosts] = useState<Array<IPost>>([]);
        const [loading, setLoading] = useState<boolean>(true);
        useEffect(() => {
            if (props.id) {
                PostsApi.getAllByUserId(props.id).then(setPosts).then(() => setLoading(false));
            }
        }, [props.id]);

        return (
            <Component {...props as P & IWithPostsDataOptionalProps} posts={posts} loading={loading} />
        );
    };

export default withPostsData;
