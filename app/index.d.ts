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
    thumbnailUrl: string,
    albumId: number
}
interface IPhotosApi {
    getAllByAlbumId(id: number): Promise<Array<IPhoto>>;
}

interface IPost {
    userId: number,
    id: number,
    title: string,
    body: string
}
interface IPostsApi {
    getAll(): Promise<Array<IPost>>;
    getAllByUserId(id: number): Promise<Array<IPost>>;
}

interface IComment {
    postId: number,
    id: number,
    title: string,
    body: string
}
interface ICommentsApi {
    getAll(): Promise<Array<IComment>>;
    getAllByPostId(id: number): Promise<Array<IComment>>;
}

interface ITodo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}
interface ITodosApi {
    getAll(): Promise<Array<ITodo>>;
    getAllByUserId(id: number): Promise<Array<ITodo>>;
}

// HOCs
type HocOptional<P, I> = Pick<P, Exclude<keyof P, keyof I>>;

interface IWithNavigationParamsAsProps {
}

interface IWithUserDataProps extends IWithLoadableProps {
    user: IUser | null
}
interface IWithUserDataOptionalProps {
    hydrate?: IUser,
    id?: number
}

interface IWithLoadableProps {
    loading: boolean
}
interface IWithUserListDataProps extends IWithLoadableProps {
    users: Array<IUser>
}

interface IWithUserAlbumsDataProps extends IWithLoadableProps {
    albums: Array<IAlbum>
}
interface IWithUserAlbumsDataOptionalProps {
    id?: number
}

interface IWithUserPhotosDataProps extends IWithLoadableProps {
    photos: Array<IPhoto>
}
interface IWithUserPhotosDataOptionalProps {
    id?: number
}

interface IWithPostsDataProps extends IWithLoadableProps {
    posts: Array<IPost>
}
interface IWithPostsDataOptionalProps {
    id?: number
}

interface IWithCommentsDataProps extends IWithLoadableProps {
    comments: Array<IComment>
}
interface IWithCommentsDataOptionalProps {
    id?: number
}

interface IWithTodosDataProps extends IWithLoadableProps {
    todos: Array<ITodo>
}
interface IWithTodosDataOptionalProps {
    id?: number
}

// Components
interface ICopyToChildren {
    object: object
}
