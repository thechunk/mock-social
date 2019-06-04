import * as React from 'react';
import {Children, FunctionComponent, ReactElement, useState} from 'react';
import {View} from 'react-native';
import SegmentedControlContext from './SegmentedControlContext';

const TabBar = require('./TabBar').default;
const Content = require('./Content').default;


const SegmentedControl: FunctionComponent<ISegmentedControl> = (props) => {
    const [selectedTab, setSelectedTab] = useState<number>(0);

    let error = false;
    Children.forEach<ReactElement<any, any>>(props.children as ReactElement[], (child) => {
        if (!child || (child.type != TabBar && child.type != Content)) {
            error = true;
            return console.error(`No children defined or invalid child type: ${child.type.displayName}`);
        }
    });

    if (error) return null;
    return (
        <SegmentedControlContext.Provider value={{selectedTab, setSelectedTab}}>
            <View>
                {props.children}
            </View>
        </SegmentedControlContext.Provider>
    )
};

export default SegmentedControl;
