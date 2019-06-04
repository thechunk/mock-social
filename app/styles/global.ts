import {PixelRatio, StyleSheet} from "react-native";

export enum Color {
    Separator = 'rgba(0, 0, 0, 0.2)',
    White = '#fff',
    Black = '#000',
    PrimaryAccent = 'rgba(0, 100, 100, 1.0)',
    SecondaryAccent = 'rgba(0, 200, 200, 1.0)'
}
export enum FontSize {
    ListCellTitle = 16,
    ListCellSubtitle = 12,
    MainTitle = 24,
    MainSubtitle = 18,
    SquareCellCallout = 24,
    SquareCellSubtitle = 12
}
export enum Dimensions {
    SeparatorWidth = PixelRatio.roundToNearestPixel(0.5),
    LeftOffset = 12,
    CellHeight = 48,
    ElementsHorizontalPadding = 8
}

export default StyleSheet.create({
    flex1: {flex: 1},
    flexRow: {flex: 1, flexDirection: 'row'},
    flexColumn: {flex: 1, flexDirection: 'column'},
    generalPadding: {padding: Dimensions.LeftOffset}
})