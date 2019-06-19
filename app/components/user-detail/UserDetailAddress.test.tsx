import * as React from 'react';
import {UserDetailAddress} from './UserDetailAddress';

import {shallow} from 'enzyme';

describe('UserDetailAddress', () => {
    const user = {address: {suite: '123', street: 'Fake St.', city: 'Springfield', zipcode: '12345'}};
    const navigation = {navigate: jest.fn()};

    beforeEach(() => {
        navigation.navigate.mockClear();
    });

    it('renders correctly', () => {
        expect(shallow(<UserDetailAddress user={user} navigation={navigation} />))
            .toMatchSnapshot();
    });

    it('navigates to MapView on address tap', () => {
        const wrapper = shallow(<UserDetailAddress user={user} navigation={navigation} />);
        wrapper.instance().onAddressPress();
        expect(navigation.navigate).toBeCalledWith('MapView', {hydrate: user});
    });
});
