import React, {ComponentType, FunctionComponent, useEffect, useState} from 'react';
import {IUser, UsersApi} from "../classes/Api";

export interface IWithUserListDataProps {
    users: Array<IUser>
}
const withUserListData =
    <P extends IWithUserListDataProps>(Component: ComponentType<P>):
        FunctionComponent<Pick<P, Exclude<keyof P, keyof IWithUserListDataProps>>> =>
        (props: Pick<P, Exclude<keyof P, keyof IWithUserListDataProps>>) => {
            const [users, setUsers] = useState<Array<IUser>>([]);
            useEffect(() => {
                UsersApi.getAll()
                    .then(data => {
                        setUsers(data);
                    });
            }, []);

            return (
                <Component {...props as P} users={users} />
            );
        };

export default withUserListData;