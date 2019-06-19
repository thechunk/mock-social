import * as React from 'react';
import {AlbumList} from './AlbumList';

import {shallow} from 'enzyme';

describe('AlbumList', () => {
    const navigation = {navigate: jest.fn()};

    beforeEach(() => {
        navigation.navigate.mockClear();
    });

    it('renders correctly', () => {
        expect(shallow(<AlbumList albums={{}} loading={false} navigation={navigation} />))
            .toMatchSnapshot();
    });

    it('navigates to PhotoGrid on album tap', () => {
        const wrapper = shallow(<AlbumList albums={{}} loading={false} navigation={navigation} />);
        const album = {id: 1};
        wrapper.instance().navigateToPhotoGrid(album)();
        expect(navigation.navigate).toBeCalledWith('PhotoGrid', {hydrate: album, id: album.id});
    });
});
