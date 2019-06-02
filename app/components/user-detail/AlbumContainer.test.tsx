import * as React from 'react';
import {shallow} from 'enzyme';
import AlbumContainer from './AlbumContainer';

describe('AlbumContainer', () => {
    it('renders correctly', () => {
        expect(shallow(<AlbumContainer userId={0} limit={1}/>)).toMatchSnapshot();
    });
});