import React from 'react';
import { shallow } from 'enzyme';

import Task from './Task';

describe('Test task component', () => {
    test('should has task name', () => {
        const taskName = 'XXX';
        const wrapper =  shallow(<Task taskName={taskName} />);
        const spans = wrapper.find('span');
        expect(spans.length).toBe(1);
        expect(spans.first().text()).toEqual(taskName);
    });  
    test('should has call delete function', () => {
        const taskName = 'XXX';
        const taskId = 100;
        const onDelete = jest.fn();
        const wrapper =  shallow(<Task
            taskName={taskName}
            taskId={taskId}
            onDelete={onDelete}
        />);
        const buttons = wrapper.find('button');
        expect(buttons.length).toBe(1);
        buttons.first().simulate('click');
        expect(onDelete).toHaveBeenCalled();
        expect(onDelete).toBeCalledWith(100);
    });  
});
