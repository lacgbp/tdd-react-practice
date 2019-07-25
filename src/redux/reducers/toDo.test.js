import configureMockStore from 'redux-mock-store';
import toDoReducer from './toDo';

describe('Testing To Do Reducer', () => {
    it('should has an empty array on initial state', () => {
        const initialState = {
            tasks: [],
        };
        expect(toDoReducer()).toEqual(initialState);
    });
    it('should has initial state if state is undefined', () => {
        const initialState = {
            tasks: [],
        };
        expect(toDoReducer(undefined)).toEqual(initialState);
    });
    it('should has initial state if action type doesnt exists', () => {
        const expectedState = {
            tasks: [],
        };
        const initialState = {
            tasks: [],
        };
        const action = { type: 'CUSTOM' };
        expect(toDoReducer(initialState, action)).toEqual(expectedState);
    });
    it('should has one task in array if ADD_TASK was executed', () => {
        const expectedState = {
            tasks: ['MY_TASK'],
        };
        const initialState = {
            tasks: [],
        };
        const action = { type: 'ADD_TASK', payload: { task: 'MY_TASK' } };
        expect(toDoReducer(initialState, action)).toEqual(expectedState);
    });
    it('should delete task when DELETE_TASK was executed', () => {
        const expectedState = {
            tasks: ['MY_TASK_1', 'MY_TASK_3'],
        };
        const initialState = {
            tasks: ['MY_TASK_1', 'MY_TASK_2', 'MY_TASK_3'],
        };
        const action = { type: 'DELETE_TASK', payload: { position: 1 } };
        expect(toDoReducer(initialState, action)).toEqual(expectedState);
    });
});