import {StyleSheet} from 'react-native';
import * as g from '../../styles/global';

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

    callOutAccessory: {
        flex: 0,
    },

    callOutAddress: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    tabBar: {
        flexDirection: 'row',
        flexWrap: 'nowrap',
        paddingLeft: g.Dimensions.Offset,
        paddingRight: g.Dimensions.Offset,
    },
    tab: {
        flex: 1,
        height: g.Dimensions.TabHeight,
        backgroundColor: g.Color.SecondaryAccent,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: g.Dimensions.TabHeight / 2,
        borderTopRightRadius: g.Dimensions.TabHeight / 2,
        borderBottomLeftRadius: g.Dimensions.TabHeight / 2,
        borderBottomRightRadius: g.Dimensions.TabHeight / 2,
        borderWidth: 2,
        borderColor: 'transparent',
    },
    tabLeftBorder: {
        marginLeft: g.Dimensions.Offset
    },
    tabActive: {
        borderColor: 'rgba(0, 0, 0, 0.3)'
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
        paddingTop: g.Dimensions.Offset,
        paddingBottom: g.Dimensions.Offset
    },

    sectionHeaderText: {
        margin: g.Dimensions.Offset,
        fontWeight: 'bold',
        color: g.Color.Black
    }
});