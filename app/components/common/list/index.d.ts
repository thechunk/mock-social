interface IListCell {
    onPress?: (event: import('react-native').GestureResponderEvent) => void;
    containerStyle?: import('react-native').StyleProp<import('react-native').ViewStyle>;
    cellStyle?: import('react-native').StyleProp<import('react-native').ViewStyle>;
}

interface IImageListCell {
    key: number,
    id: number,
    title: string,
    subtitle?: string,
    onPress?: (event: import('react-native').GestureResponderEvent) => void,
    cellStyle?: import('react-native').StyleProp<import('react-native').ViewStyle>,
    imageStyle?: import('react-native').StyleProp<import('react-native').ImageStyle>,
    titleStyle?: import('react-native').StyleProp<import('react-native').TextStyle>
    subtitleStyle?: import('react-native').StyleProp<import('react-native').TextStyle>
}

interface ITitleSubtitleListCell {
    key: number,
    title: string,
    subtitle?: string,
    leftAccessory?: () => JSX.Element,
    rightAccessory?: () => JSX.Element,
    onPress?: (event: import('react-native').GestureResponderEvent) => void,
    cellStyle?: import('react-native').StyleProp<import('react-native').ViewStyle>,
    titleStyle?: import('react-native').StyleProp<import('react-native').TextStyle>
    subtitleStyle?: import('react-native').StyleProp<import('react-native').TextStyle>
}
