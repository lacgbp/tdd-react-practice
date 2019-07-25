import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';
import { addTask, deleteTask } from './toDo';

const mockedStore = () => {
    const middlewares = [thunk];
    const mockStore = configureMockStore(middlewares);
    const store = mockStore(rootReducer());
    return store;
};

describe('Testing ToDo Action Creators', () => {
    it('should execute addTask action successfully', () => {
        const store = mockedStore();
        const task = 'MY_TASK';
        store.dispatch(addTask(task));
        const expected = [
            {
                type: 'ADD_TASK',
                payload: {
                    task,
                }
            }
        ];
        expect(store.getActions()).toEqual(expect.arrayContaining(expected));
    });
    it('should execute deleteTask action successfully', () => {
        const store = mockedStore();
        const position = 0;
        store.dispatch(deleteTask(position));
        const expected = [
            {
                type: 'DELETE_TASK',
                payload: {
                    position,
                }
            }
        ];
        expect(store.getActions()).toEqual(expect.arrayContaining(expected));
    });
});