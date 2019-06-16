import * as React from "react";
import MapView from "./MapView";
import {PureComponent} from "react";
import {NavigationInjectedProps} from "react-navigation";
import withNavigationParamsAsProps from "../../hoc/withNavigationParamsAsProps";
import styles from "./styles";

class MapViewScreen extends PureComponent<IMapViewScreen & NavigationInjectedProps> {
    render() {
        return <MapView coordinates={this.props.hydrate.address.geo} style={styles.view} />;
    }
}

export default withNavigationParamsAsProps(MapViewScreen);
