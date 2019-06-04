interface IAlbumContainer {
    userId: number,
    limit: number,
    renderItem: (photo: IPhoto) => import('react').ReactElement,
    withAlbums?: (albums: Array<IAlbum>) => void
}

interface IPhotoData {
    renderItem: (photo: IPhoto) => import('react').ReactElement
}

interface IAlbumData {
    renderItem: (photo: IPhoto) => import('react').ReactElement,
    limit: number,
    withAlbums?: (albums: Array<IAlbum>) => void
}