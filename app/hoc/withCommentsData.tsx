import React, {ComponentType, FC, useEffect, useState} from 'react';
import {CommentsApi} from '../classes/Api';

const withCommentsData = <P extends IWithCommentsDataProps>(Component: ComponentType<P>):
    FC<HocOptional<P, IWithCommentsDataProps> & IWithCommentsDataOptionalProps> =>
    (props: HocOptional<P, IWithCommentsDataProps> & IWithCommentsDataOptionalProps) => {
        const [comments, setComments] = useState<Array<IComment>>([]);
        const [loading, setLoading] = useState<boolean>(true);
        useEffect(() => {
            if (props.id) {
                CommentsApi.getAllByPostId(props.id).then(setComments).then(() => setLoading(false));
            }
        }, [props.id]);

        return (
            <Component {...props as P & IWithCommentsDataOptionalProps} comments={comments} loading={loading} />
        );
    };

export default withCommentsData;
