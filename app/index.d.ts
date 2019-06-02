// Api
interface IGeo {
    lat: number,
    lng: number
}
interface IAddress {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: IGeo
}
interface ICompany {
    name: string,
    catchPhrase: string,
    bs: string
}
interface IUser {
    id: number,
    name: string,
    username: string,
    email: string,
    address: IAddress,
    phone: string,
    website: string,
    company: ICompany
}

interface IUsersApi {
    getAll(): Promise<Array<IUser>>;
    getById(id: number): Promise<IUser>;
}

interface IAlbum {
    userId: number,
    id: number,
    title: string,
    photos: Array<IPhoto>
}
interface IAlbumsApi {
    getAllByUserId(id: number): Promise<Array<IAlbum>>;
}

interface IPhoto {
    userId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string
}
interface IPhotosApi {
    getAllByAlbumId(id: number): Promise<Array<IPhoto>>;
}

// HOCs
type HocOptional<P, I> = Pick<P, Exclude<keyof P, keyof I>>;

interface IWithNavigationParamsAsProps {
}

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

interface IWithUserAlbumsDataProps {
    albums: Array<IAlbum>
}
interface IWithUserAlbumsDataOptionalProps {
    id?: number
}

interface IWithUserPhotosDataProps {
    photos: Array<IPhoto>
}
interface IWithUserPhotosDataOptionalProps {
    id?: number
}

// Components
interface ICopyToChildren {
    object: object
}
