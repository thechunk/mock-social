import {StatusBar, StyleSheet} from 'react-native';
import * as g from '../../styles/global';
import {Header} from "react-navigation";

export {default as inherited} from '../common/list/styles';
export default StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'stretch'
    },
    photoNameView: {
        flexDirection: 'row',
        paddingBottom: g.Dimensions.Offset
    },
    photoHero: {
        height: 180,
    },
    photoHeroContainer: {
        flex: 1,
        margin: g.Dimensions.Offset,
    },
    nameOverlay: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        height: 180,
        marginRight: g.Dimensions.Offset
    },

    userAlbumsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: g.Dimensions.Offset,
        marginRight: g.Dimensions.Offset,
        marginBottom: g.Dimensions.Offset
    },
    userAlbumsMore: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.3)'
    },
    userAlbumsMoreCount: {
        color: g.Color.White,
        textShadowColor: g.Color.Black,
        textShadowRadius: 1,
        fontSize: g.FontSize.SquareCellCallout,
        fontWeight: 'bold'
    },
    userAlbumsMoreText: {
        color: g.Color.White,
        textShadowColor: g.Color.Black,
        fontSize: g.FontSize.SquareCellSubtitle
    },
    title: {
        fontWeight: 'bold',
        fontSize: g.FontSize.MainTitle,
        color: g.Color.Black,
    },
    subtitle: {
        fontSize: g.FontSize.MainSubtitle,
        color: g.Color.Black,
    },

    callOutSection: {
        backgroundColor: g.Color.White,
        padding: g.Dimensions.InnerLargePadding,
        marginLeft: g.Dimensions.Offset,
        marginRight: g.Dimensions.Offset,
        marginBottom: g.Dimensions.Offset
    },
    callOutSectionText: {
        fontSize: g.FontSize.MainSubtitle,
        color: g.Color.Black
    },

    tabBar: {
        flexDirection: 'row',
        flexWrap: 'nowrap',
        paddingLeft: g.Dimensions.Offset,
        paddingRight: g.Dimensions.Offset,
    },
    tab: {
        flex: 1,
        height: g.Dimensions.CellHeight,
        backgroundColor: g.Color.SecondaryAccent,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: g.Dimensions.CellHeight / 2,
        borderTopRightRadius: g.Dimensions.CellHeight / 2,
        borderBottomLeftRadius: g.Dimensions.CellHeight / 2,
        borderBottomRightRadius: g.Dimensions.CellHeight / 2,
        borderWidth: 2,
        borderColor: 'transparent',
    },
    tabLeftBorder: {
        marginLeft: g.Dimensions.Offset
    },
    tabActive: {
        borderColor: 'rgba(255, 255, 255, 0.3)'
    },
    tabTextInactive: {
        color: g.Color.White
    },
    tabTextActive: {
        fontWeight: 'bold'
    },

    postCell: {
        padding: g.Dimensions.Offset,
        backgroundColor: g.Color.White
    },
    postTabContainer: {
        marginTop: g.Dimensions.Offset,
        borderTopColor: g.Color.Separator,
        borderTopWidth: g.Dimensions.SeparatorWidth
    },

    todoCell: {
        padding: g.Dimensions.Offset,
        backgroundColor: g.Color.White,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    todoTitle: {
        marginLeft: g.Dimensions.Offset,
        flex: 1
    },

    sectionHeaderText: {
        margin: g.Dimensions.Offset,
        fontWeight: 'bold'
    }
});