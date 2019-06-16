interface IAlbumContainer {
    userId: number,
    limit: number,
    renderItem: (photo: IPhoto, album: IAlbum) => import('react').ReactElement,
    withAlbums?: (albums: Array<IAlbum>) => void
}

interface IPhotoData {
    album?: IAlbum,
    renderItem: (photo: IPhoto, album?: IAlbum) => import('react').ReactElement
}

interface IAlbumData {
    renderItem: (photo: IPhoto, album?: IAlbum) => import('react').ReactElement,
    limit: number,
    withAlbums?: (albums: Array<IAlbum>) => void
}