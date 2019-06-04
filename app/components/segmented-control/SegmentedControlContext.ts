import {Context, createContext} from "react";

const SegmentedControlContext: Context<ISegmentedControlContext> = createContext({
    selectedTab: 0,
    setSelectedTab: (id: number) => {}
});
export default SegmentedControlContext;