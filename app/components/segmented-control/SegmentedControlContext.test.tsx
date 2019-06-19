import * as React from 'react';
import SegmentedControlContext from "./SegmentedControlContext";

describe('SegmentedControlContext', () => {
    it('creates context', () => {
        expect(SegmentedControlContext.Provider).not.toBeUndefined();
        expect(SegmentedControlContext.Consumer).not.toBeUndefined();
    });

    it('contains context values', () => {
        expect(<SegmentedControlContext.Provider value={{selectedTab: 1, setSelectedTab: () => {}}} />)
            .toMatchSnapshot();
    })
});
