import React from 'react';
import { shallow } from 'enzyme';
import ToDo from './ToDo';

describe('ToDo Component test', () => {
    it('should has add task form', () => {
        const wrapper = shallow(<ToDo />);
        const taskFrm = wrapper.find('TaskFrm');
        expect(taskFrm.length).toBe(1);
    });
    it('should has empty array in initial state', () => {
        const expectState = {
            tasks : [],
        }
        const wrapper = shallow(<ToDo />);
        expect(wrapper.instance().state).toEqual(expectState);
    });
    it('should add a task when addNewTask was executed', () => {
        const expectState = {
            tasks : ['TASK'],
        }
        const wrapper = shallow(<ToDo />);
        const spy = jest.spyOn(wrapper.instance(), 'addNewTask');
        wrapper.instance().addNewTask('TASK');
        expect(wrapper.instance().state).toEqual(expectState);
        expect(spy).toHaveBeenCalled();
    });
    it('should has empty array in initial state, it doesnt has Tasks', () => {
        const wrapper = shallow(<ToDo />);
        const taskFrm = wrapper.find('Task');
        expect(taskFrm.length).toBe(0);
    });
    it('should has a Task when add a new task to state', () => {
        const wrapper = shallow(<ToDo />);
        wrapper.instance().addNewTask('TASK');
        const taskFrm = wrapper.find('Task');
        expect(taskFrm.length).toBe(1);
    });
    it('should add a task when addNewTask was executed', () => {
        const expectState = {
            tasks : ['TASK 1'],
        }
        const wrapper = shallow(<ToDo />);
        wrapper.instance().addNewTask('TASK 0');
        wrapper.instance().addNewTask('TASK 1');
        wrapper.instance().deleteTask(0);
        expect(wrapper.instance().state).toEqual(expectState);
    });
});
