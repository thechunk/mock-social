import React, {ComponentType, FC, useEffect, useState} from 'react';
import {UsersApi} from '../classes/Api';

const withUserListData = <P extends IWithUserListDataProps>(Component: ComponentType<P>):
    FC<HocOptional<P, IWithUserListDataProps>> => (props: HocOptional<P, IWithUserListDataProps>) => {
        const [users, setUsers] = useState<Array<IUser>>([]);
        const [loading, setLoading] = useState<boolean>(true);
        useEffect(() => {
            UsersApi.getAll().then(setUsers).then(() => setLoading(false));
        }, []);

        return <Component {...props as P} users={users} loading={loading} />;
    };

export default withUserListData;