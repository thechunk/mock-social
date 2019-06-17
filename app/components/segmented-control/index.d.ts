interface ISegmentedControl {
}
interface ISegmentedControlContext {
    selectedTab: number,
    setSelectedTab: (id: number) => void
}

interface IContent {
    id: number
}
interface IContentState {
    tabStates: any
}

interface ITab {
    id: number,
    title: string,
    inactiveStyle?: import('react-native').StyleProp<import('react-native').ViewStyle>,
    activeStyle?: import('react-native').StyleProp<import('react-native').ViewStyle>,
    inactiveTextStyle?: import('react-native').StyleProp<import('react-native').TextStyle>,
    activeTextStyle?: import('react-native').StyleProp<import('react-native').TextStyle>
}

interface ITabBar {
    style?: import('react-native').StyleProp<import('react-native').ViewStyle>
}
