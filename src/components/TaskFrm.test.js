import React from 'react';
import { shallow } from 'enzyme';
import TaskFrm from './TaskFrm';

describe('Task Frm tests', () => {
    it('should has label with task name text', () => {
        const wrapper = shallow(<TaskFrm />);
        const labels = wrapper.find('label');
        expect(labels.length).toBe(1);
        expect(labels.first().text()).toBe('Task name:');
    });
    it('should has input', () => {
        const wrapper = shallow(<TaskFrm />);
        const inputs = wrapper.find('input');
        expect(inputs.length).toBe(1);
        expect(inputs.first().prop('type')).toBe('text');
        expect(inputs.first().prop('placeholder')).toBe('Write your task');
    });
    it('should has button and this execute add function', () => {
        const addTask = jest.fn();
        const wrapper = shallow(<TaskFrm addTask={addTask} />);
        const buttons = wrapper.find('button');
        expect(buttons.length).toBe(1);
        const button = buttons.first();
        expect(button.text()).toEqual('ADD');
        button.simulate('click');
        expect(addTask).toHaveBeenCalled();
    });
    it('should has taskValue empty in initialState', () => {
        const initialState = {
            taskValue: ''
        };
        const wrapper = shallow(<TaskFrm />);
        const instance = wrapper.instance();
        expect(instance.state).toEqual(initialState);
    });
    it('should change taskValue when onChange method was executed', () => {
        const value = 'AAAAA';
        const expectedState = {
            taskValue: value,
        };
        const wrapper = shallow(<TaskFrm />);
        const instance = wrapper.instance();
        const input = wrapper.find('input').first();
        input.simulate('change', { target: { value } });
        expect(instance.state).toEqual(expectedState);
    });
    it('should execute add function with task value', () => {
        const value = 'AAAAA';
        const addTask = jest.fn();
        const wrapper = shallow(<TaskFrm addTask={addTask} />);
        const input = wrapper.find('input').first();
        input.simulate('change', { target: { value } });
        const button = wrapper.find('button').first();
        button.simulate('click');
        expect(addTask).toHaveBeenCalledWith(value);
    });
});