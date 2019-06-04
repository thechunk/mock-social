import {PureComponent} from "react";
import withUserPhotosData from "../../../hoc/withAlbumPhotosData";

class PhotoData extends PureComponent<IPhotoData & IWithUserPhotosDataProps> {
    static displayPhoto(photos: Array<IPhoto>): IPhoto | undefined {
        return photos.sort((a, b) => a.id - b.id).pop();
    }

    render() {
        const displayPhoto = PhotoData.displayPhoto(this.props.photos);
        return displayPhoto ? this.props.renderItem(displayPhoto) : null;
    }
}

const WrappedWithPhotos = withUserPhotosData(PhotoData);
export default WrappedWithPhotos;