import {StyleSheet} from 'react-native';
import * as g from '../../styles/global';

export default StyleSheet.create({
    cell: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        height: g.Dimensions.CellHeight,
        paddingLeft: g.Dimensions.LeftOffset,
        borderBottomColor: g.Color.Separator,
        borderBottomWidth: g.Dimensions.SeparatorWidth
    },
    title: {
        fontSize: g.FontSize.ListCellTitle
    },
    subtitle: {
        fontSize: g.FontSize.ListCellSubtitle
    }
});
