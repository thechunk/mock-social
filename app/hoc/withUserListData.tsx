import React, {ComponentType, FC, useEffect, useState} from 'react';
import {UsersApi} from '../classes/Api';

const withUserListData = <P extends IWithUserListDataProps>(Component: ComponentType<P>):
    FC<HocOptional<P, IWithUserListDataProps>> => (props: HocOptional<P, IWithUserListDataProps>) => {
        const [users, setUsers] = useState<Array<IUser>>([]);
        useEffect(() => {
            UsersApi.getAll().then(setUsers);
        }, []);

        return (
            <Component {...props as P} users={users} />
        );
    };

export default withUserListData;