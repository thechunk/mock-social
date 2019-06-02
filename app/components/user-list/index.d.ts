interface IUserListCell {
    key: number,
    title: string,
    subtitle?: string,
    onPress?: (event: import('react-native').GestureResponderEvent) => void,
    cellStyle?: import('react-native').StyleProp<import('react-native').ViewStyle>,
    titleStyle?: import('react-native').StyleProp<import('react-native').TextStyle>
    subtitleStyle?: import('react-native').StyleProp<import('react-native').TextStyle>
}
