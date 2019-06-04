import * as React from 'react';

import {shallow} from 'enzyme';
import TitleSubtitleListCell from './TitleSubtitleListCell';

describe('TitleSubtitleListCell', () => {
    it('renders correctly', () => {
        expect(shallow(<TitleSubtitleListCell key={1} title='title' />)).toMatchSnapshot();
    });
});
