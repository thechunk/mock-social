///<reference path="../node_modules/react-navigation/typescript/react-navigation.d.ts"/>
// Api

interface IUser {
    id: number,
    name: String,
    username: String,
    email: String
}

interface IUsersApi {
    getAll(): Promise<Array<IUser>>;
    getById(id: number): Promise<IUser>;
}

interface IAlbum {
    userId: number,
    id: number,
    title: string
}
interface IAlbumsApi {
    getAllByUserId(id: number): Promise<Array<IAlbum>>;
}

interface IPhoto {
    userId: number,
    id: number,
    title: string
}
interface IPhotosApi {
    getAllByAlbumId(id: number): Promise<Array<IPhoto>>;
}

// HOCs
type HocOptional<P, I> = Pick<P, Exclude<keyof P, keyof I>>;

interface IWithUserDataProps {
    user: IUser | null
}
interface IWithUserDataOptionalProps {
    hydrate?: IUser,
    id?: number
}

interface IWithUserListDataProps {
    users: Array<IUser>
}

interface IWithNavigationParamsAsProps {
}
