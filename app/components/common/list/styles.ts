import {StyleSheet} from 'react-native';
import * as g from '../../../styles/global';

export default StyleSheet.create({
    cell: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        minHeight: g.Dimensions.CellHeight,
        paddingLeft: g.Dimensions.Offset,
    },
    cellOuter: {
        borderBottomColor: g.Color.Separator,
        borderBottomWidth: g.Dimensions.SeparatorWidth
    },
    title: {
        fontSize: g.FontSize.ListCellTitle
    },
    subtitle: {
        fontSize: g.FontSize.ListCellSubtitle
    },
    loader: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
