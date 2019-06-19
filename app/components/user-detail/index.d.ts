interface IPhotoHero {
    userId: number
}

interface IUserDetailAddress {
    user: IUser
}

interface IUserDetailAlbums {
    userId: number,
    initialState?: Array<IAlbum>
}

interface IUserTabs {
    user: IUser
}

interface IUserDetailPostsTab {
}
interface IUserDetailPostsTabState {
    opacity: import('react-native').Animated.Value
}

interface IUserDetailTodosTab {
}
interface IUserDetailTodosTabState {
    opacity: import('react-native').Animated.Value
}
