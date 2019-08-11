import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';
import { addTask, deleteTask, getAsyncTask } from './toDo';

const mockedStore = () => {
    const middlewares = [thunk];
    const mockStore = configureMockStore(middlewares);
    const store = mockStore(rootReducer());
    return store;
};

describe('Testing ToDo Action Creators', () => {
    beforeEach(() => moxios.install());
    afterEach(() => moxios.uninstall());

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
    it('should FETCH_TODO_SUCCESS', async () => {
        const todo = {
            userId: 1,
            id: 1,
            title: 'delectus aut autem',
            completed: false,
        }
        moxios.wait(() => {
            let request = moxios.requests.mostRecent()
            request.respondWith({
                status: 200,
                response: todo,
            });
        });
        const store = mockedStore();
        const expectedActions = [
            { 
                type: 'FETCH_TODO_SUCCESS', 
                payload: { 
                    todo,
                },
            }
        ]
        await store.dispatch(getAsyncTask(1));
        expect(store.getActions()).toEqual(expectedActions);
    });
    it('should FETCH_TODO_ERROR', async () => {
        const error = {
            title: 'TITLE',
            message: 'TITLE',
        };
        moxios.wait(() => {
            let request = moxios.requests.mostRecent()
            request.respondWith({
                status: 500,
                response: error,
            });
        });
        const store = mockedStore();
        const expectedActions = [
            { 
                type: 'FETCH_TODO_ERROR',
                payload: {
                    error,
                }
            }
        ]
        await store.dispatch(getAsyncTask(1));
        expect(store.getActions()).toEqual(expectedActions);
    });
});