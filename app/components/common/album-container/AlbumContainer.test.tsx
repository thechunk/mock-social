import * as React from 'react';
import {shallow} from 'enzyme';
import AlbumContainer from './AlbumContainer';
import {Text} from 'react-native';

describe('AlbumContainer', () => {
    it('renders correctly', () => {
        expect(shallow(<AlbumContainer userId={0} limit={1} renderItem={v => <Text>{v.url}</Text>}/>)).toMatchSnapshot();
    });
});