import * as React from 'react';
import {PureComponent} from "react";
import ImageViewer from './ImageViewer';
import {NavigationInjectedProps} from "react-navigation";
import withNavigationParamsAsProps from "../../hoc/withNavigationParamsAsProps";
import styles from './styles';

class ImageViewerScreen extends PureComponent<IImageViewerScreen & NavigationInjectedProps> {
    render() {
        return <ImageViewer url={this.props.hydrate.url} style={styles.viewer} />;
    }
}

export default withNavigationParamsAsProps(ImageViewerScreen);