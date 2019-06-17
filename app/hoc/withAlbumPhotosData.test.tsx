/**
 * @jest-environment jsdom
 */

import * as React from 'react';
import {mount, shallow} from 'enzyme';
import {View} from "react-native";
import withAlbumPhotosData from "./withAlbumPhotosData";
import {PhotosApi} from '../classes/Api';
require('setimmediate');

describe('withAlbumPhotosData', () => {
    it('wrapper renders correctly', () => {
        const Component = () => (<View/>);
        const Wrapped: any = withAlbumPhotosData(Component);
        expect(shallow(<Wrapped id={1} />)).toMatchSnapshot();
    });

    it('calls api', (done) => {
        PhotosApi.getAllByAlbumId = jest.fn().mockReturnValue(Promise.resolve());
        const Component = () => (<div />);
        const Wrapped: any = withAlbumPhotosData(Component);
        mount(<Wrapped id={1} />);
        done();
        expect(PhotosApi.getAllByAlbumId).toBeCalledTimes(1);
    });

    it('calls api, sets data and loader status on success', (done) => {
        PhotosApi.getAllByAlbumId = jest.fn().mockReturnValue(Promise.resolve(['foo']));
        const Component = () => (<div />);
        const Wrapped: any = withAlbumPhotosData(Component);
        let wrappedComponent = mount(<Wrapped id={1} />).childAt(0);
        expect(wrappedComponent.props().loading).toEqual(true);

        flushAwaitable(done).then(() => {
            expect(wrappedComponent.props().loading).toEqual(false);
            expect(wrappedComponent.props().photos).toEqual(['foo']);
        });
    });
});
