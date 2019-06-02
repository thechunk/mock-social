import {PixelRatio, StyleSheet} from "react-native";

export enum Color {
    Separator = 'rgba(0, 0, 0, 0.2)',
    White = '#fff'
}
export enum FontSize {
    ListCellTitle = 16,
    ListCellSubtitle = 12,
    MainTitle = 24,
    MainSubtitle = 18
}
export enum Dimensions {
    SeparatorWidth = PixelRatio.roundToNearestPixel(0.5),
    LeftOffset = 12,
    CellHeight = 48
}

export default StyleSheet.create({
    flex1: {flex: 1}
})