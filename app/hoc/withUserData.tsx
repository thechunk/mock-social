import React, {ComponentType, FC, useEffect, useState} from 'react';
import {UsersApi} from '../classes/Api';

const withUserData = <P extends IWithUserDataProps>(Component: ComponentType<P>):
    FC<HocOptional<P, IWithUserDataProps> & IWithUserDataOptionalProps> =>
    (props: HocOptional<P, IWithUserDataProps> & IWithUserDataOptionalProps) => {
        const [user, setUser] = useState<IUser | null>(null);
        const [loading, setLoading] = useState<boolean>(true);
        useEffect(() => {
            if (props.id) UsersApi.getById(props.id).then(setUser).then(() => setLoading(false));
        }, [props.id]);

        useEffect(() => {
            if (props.hydrate) setUser(props.hydrate);
        }, [props.hydrate]);

        return (
            <Component {...props as P & IWithUserDataOptionalProps} user={user} loading={loading} />
        );
    };

export default withUserData;
