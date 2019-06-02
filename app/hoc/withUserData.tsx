import React, {ComponentType, FC, useEffect, useState} from 'react';
import {UsersApi} from '../classes/Api';

const withUserData = <P extends IWithUserDataProps>(Component: ComponentType<P>):
    FC<HocOptional<P, IWithUserDataProps> & IWithUserDataOptionalProps> =>
    (props: HocOptional<P, IWithUserDataProps> & IWithUserDataOptionalProps) => {
        const [user, setUser] = useState<IUser | null>(null);
        useEffect(() => {
            if (props.id) UsersApi.getById(props.id).then(setUser);
        }, [props.id]);

        useEffect(() => {
            if (props.hydrate) setUser(props.hydrate);
        }, [props.hydrate]);

        return (
            <Component {...props as P & IWithUserDataOptionalProps} user={user} />
        );
    };

export default withUserData;
