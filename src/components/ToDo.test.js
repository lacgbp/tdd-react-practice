import React from 'react';
import { shallow } from 'enzyme';
import { ToDo } from './ToDo';
import TaskFrm from './TaskFrm';
import Task from './Task';

describe('ToDo Component test', () => {
    it('should has add task form', () => {
        const props = {
            tasks : [],
        };
        const wrapper = shallow(<ToDo {...props}/>);
        const taskFrm = wrapper.find(TaskFrm);
        expect(taskFrm.length).toBe(1);
    });
    it('should has render a task when addTask was executed', () => {
        const myTask = 'MY_TASK';
        const props = {
            tasks : [myTask],
        };
        const wrapper = shallow(<ToDo {...props}/>);
        const tasks = wrapper.find(Task);
        expect(tasks.length).toBe(1);
    });
    it('should has empty array in initial state, it doesnt has Tasks', () => {
        const props = {
            tasks : [],
        };
        const wrapper = shallow(<ToDo {...props}/>);
        const taskFrm = wrapper.find('Task');
        expect(taskFrm.length).toBe(0);
    });
});
