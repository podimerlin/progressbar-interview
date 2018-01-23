import React from 'react';
import { shallow } from 'enzyme';

describe('Bar', () => {
    const bar = shallow(<Bar/>);
    it('renders correctly', () => {
        expect(bar).toMatchSnapshot();
    });
        

})