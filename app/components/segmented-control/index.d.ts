interface ISegmentedControl {
}
interface ISegmentedControlContext {
    selectedTab: number,
    setSelectedTab: (id: number) => void
}

interface IContent {
    id: number
}

interface ITab {
    id: number,
    title: string
}

interface ITabBar {
}
