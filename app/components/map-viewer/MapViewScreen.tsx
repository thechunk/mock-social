import * as React from "react";
import MapView from "./MapView";
import {PureComponent} from "react";
import {NavigationInjectedProps} from "react-navigation";
import withNavigationParamsAsProps from "../../hoc/withNavigationParamsAsProps";
import styles from "./styles";

export class MapViewScreen extends PureComponent<IMapViewScreen & NavigationInjectedProps> {
    render() {
        const {lat, lng} = this.props.hydrate.address.geo;
        return <MapView
            region={{
                latitude: lat,
                longitude: lng,
                latitudeDelta: 0.8,
                longitudeDelta: 0.8
            }}
            style={styles.view} />;
    }
}

export default withNavigationParamsAsProps(MapViewScreen);
