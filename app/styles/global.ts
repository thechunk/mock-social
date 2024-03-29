import {PixelRatio, StyleSheet} from "react-native";
import {Header} from "react-navigation";
import DeviceInfo from 'react-native-device-info';

const statusBarHeight = DeviceInfo.hasNotch() ? 25 : 0;
const bottomPadding = DeviceInfo.hasNotch() ? 25 : 0;

export enum Color {
    Separator = 'rgba(0, 0, 0, 0.2)',
    White = '#fff',
    Black = '#000',
    PrimaryAccent = '#5e7dc2',
    PrimaryDarkAccent = '#424656',
    SecondaryAccent = '#c06171',
    SecondaryDarkAccent = '#872e42',
    Background = '#a6abbd'
}
export enum FontSize {
    ListCellTitle = 16,
    ListCellSubtitle = 12,
    MainTitle = 16,
    MainSubtitle = 14,
    SquareCellCallout = 24,
    SquareCellSubtitle = 12
}
export enum Dimensions {
    SeparatorWidth = PixelRatio.roundToNearestPixel(0.5),
    Offset = 12,
    TabHeight = 40,
    CellHeight = 48,
    ElementsHorizontalPadding = 8,
    InnerLargePadding = 24,
    BorderRadius = 12,
}

export const Insets = {
    ScrollViewWithFloatingHeader: {top: Header.HEIGHT + statusBarHeight, bottom: 25}
};

export const BlankImageUri = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs=";

export default StyleSheet.create({
    flex1: {flex: 1},
    flexRow: {flex: 1, flexDirection: 'row'},
    flexColumn: {flex: 1, flexDirection: 'column'},
    generalPadding: {padding: Dimensions.Offset},
    containerShadow: {
        shadowOffset: {width: 0, height: 6},
        shadowColor: Color.Black,
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5
    },
    viewBackground: {
        backgroundColor: Color.Background
    },
    roundedBorder: {
        borderTopLeftRadius: Dimensions.BorderRadius,
        borderTopRightRadius: Dimensions.BorderRadius,
        borderBottomLeftRadius: Dimensions.BorderRadius,
        borderBottomRightRadius: Dimensions.BorderRadius,
        overflow: 'hidden'
    },
    scrollViewHeaderOffset: {
        paddingTop: Header.HEIGHT + statusBarHeight,
        paddingBottom: bottomPadding
    }
})