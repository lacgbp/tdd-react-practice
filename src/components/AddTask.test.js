import React from 'react';
import { shallow } from 'enzyme';

import AddTask from './AddTask';

describe('Tests Add Task component ', () => {
    test('should has input to write task', () => {
        const wrapper = shallow(<AddTask />);
        const inputs = wrapper.find('input');
        expect(inputs.length).toBe(1);
    });
    test('should has button to save task', () => {
        const wrapper = shallow(<AddTask />);
        const buttons = wrapper.find('button');
        expect(buttons.length).toBe(1);
    });
    test('should has an empty task value in component state', () => {
        const wrapper = shallow(<AddTask />);
        const initialState = {
            taskValue: ''
        };
        expect(wrapper.instance().state).toEqual(initialState);
    });
    test('should change task value when write a task', () => {
        const myValue = 'myValue';
        const state = {
            taskValue: myValue
        };
        const wrapper = shallow(<AddTask />);
        const input = wrapper.find('input').first();
        input.simulate('change', { target: { value: myValue }});
        expect(wrapper.instance().state).toEqual(state);
    });
    test('should click on button saveTask function was called with the task', () => {
        const myValue = 'myValue';
        const saveTask = jest.fn();
        const wrapper = shallow(<AddTask saveTask={saveTask}/>);
        const input = wrapper.find('input').first();
        input.simulate('change', { target: { value: myValue }});
        const button = wrapper.find('button').first();
        button.simulate('click');
        expect(saveTask).toHaveBeenCalled();
        expect(saveTask).toBeCalledWith(myValue);
    });
});