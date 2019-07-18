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
});
