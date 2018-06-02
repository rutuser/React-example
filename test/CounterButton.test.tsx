import * as React from 'react';
import { shallow } from 'enzyme';
import CounterButton from "../src/components/CounterButton";

describe('CounterButton', () => {
    describe('render', () => {
        test('Deberia renderizar un boton con counter 0', () => {
            const wrapper = shallow(<CounterButton/>);
            expect(wrapper.find('button').text()).toBe('0');
        });
        test('Deberia incrementar en +1', () => {
            const wrapper = shallow(<CounterButton/>);
            wrapper.find('button').simulate('click');
            expect(wrapper.find('button').text()).toBe('1');
        });
    });
});