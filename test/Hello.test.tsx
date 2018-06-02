import * as React from 'react';
import { shallow } from 'enzyme';
import Hello from "../src/components/Hello";

describe('Hello', () => {
    describe('render', () =>{
        test('Deberia renderizar son un nombre correcto', () => {
            const wrapper = shallow(<Hello name="Juan"/>);
            expect(wrapper.find('h1').text()).toBe('Hello Juan');
        });
    });
});