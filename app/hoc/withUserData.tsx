import React, {ComponentType, FunctionComponent, useEffect, useState} from 'react';
import {IUser, UsersApi} from "../classes/Api";

export interface IWithUserDataProps {
    user: IUser | null
}
export interface IWithUserDataOptionalProps {
    hydrate?: IUser,
    id?: number
}
const withUserData =
    <P extends IWithUserDataProps>(Component: ComponentType<P>):
        FunctionComponent<Pick<P, Exclude<keyof P, keyof IWithUserDataProps>> & IWithUserDataOptionalProps> =>
        (props: Pick<P, Exclude<keyof P, keyof IWithUserDataProps>> & IWithUserDataOptionalProps) => {
            const [user, setUser] = useState<IUser | null>(null);
            useEffect(() => {
                if (props.id) {
                    UsersApi.getById(props.id)
                        .then(data => {
                            setUser(data);
                        });
                }
            }, [props.id]);

            useEffect(() => {
                if (props.hydrate) setUser(props.hydrate);
            }, [props.hydrate]);

            return (
                <Component {...props as P & IWithUserDataOptionalProps} user={user} />
            );
        };

export default withUserData;
