import * as React from 'react';
import {UserDetailAlbums} from './UserDetailAlbums';

import {shallow} from 'enzyme';
import {TouchableHighlight} from "react-native";

describe('UserDetailAlbums', () => {
    const photos = {userId: 1, id: 1, title: 'title', url: 'https://url', thumbnailUrl: 'https://url', albumId: 1};
    const albums = [{userId: 1, id: 1, title: 'title', photos}];
    const navigation = {navigate: jest.fn()};

    beforeEach(() => {
        navigation.navigate.mockClear();
    });

    it('renders correctly', () => {
        expect(shallow(<UserDetailAlbums userId={1} navigation={navigation} initialState={albums} />))
            .toMatchSnapshot();
    });

    it('shows more call to action if more albums than 4 albums', () => {
        const moreAlbums = [1, 2, 3, 4, 5].map(x => ({userId: 1, id: x, title: 'title', photos}));
        const wrapper = shallow(<UserDetailAlbums userId={1} navigation={navigation} initialState={moreAlbums} />);
        expect(wrapper.find(TouchableHighlight)).toHaveLength(1);
    });

    it('does not show call to action if less than 5 albums', () => {
        const wrapper = shallow(<UserDetailAlbums userId={1} navigation={navigation} initialState={albums} />);
        expect(wrapper.find(TouchableHighlight)).toHaveLength(0);
    });

    it('navigates to PhotoGrid on album tap', () => {
        UserDetailAlbums.prototype.onTapAlbum({navigation}, 1, albums[0])();
        expect(navigation.navigate).toBeCalledWith('PhotoGrid', {id: 1, hydrate: albums[0]});
    });

    it('navigates to AlbumList on more tap', () => {
        UserDetailAlbums.prototype.onTapMore({navigation}, 1)();
        expect(navigation.navigate).toBeCalledWith('AlbumList', {id: 1});
    });
});
