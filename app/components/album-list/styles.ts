import {StyleSheet} from 'react-native';
import * as g from '../../styles/global';

export {default as inherited} from '../common/list/styles';
export default StyleSheet.create({
    cell: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'flex-start'
    },
    cellTextView: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: g.Dimensions.ElementsHorizontalPadding
    },
    image: {
        flex: 0,
        width: g.Dimensions.CellHeight,
        height: g.Dimensions.CellHeight
    }
});
