import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

const app = shallow(<App />);

describe('App', () => {

    it('renders correctly', () => {
        expect(app).toMatchSnapshot();
    });

    it('inits with empty bars', () => {
        expect(app.state().bars).toEqual([]);
    })

    var ep = {
                "buttons": [
                    10,
                    38,
                    -13,
                    -18
                ],
                "bars": [
                    62,
                    45,
                    62
                ],
                "limit": 230
            };

    it('calls function to read end point', () => {
        const readEndpoint = jest.fn();
        expect(readEndpoint).toHaveBeenCalled();
    });

});