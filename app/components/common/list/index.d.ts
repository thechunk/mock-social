interface IListCell {
    onPress?: (event: import('react-native').GestureResponderEvent) => void;
    containerStyle?: import('react-native').StyleProp<import('react-native').ViewStyle>;
    cellStyle?: import('react-native').StyleProp<import('react-native').ViewStyle>;
}
