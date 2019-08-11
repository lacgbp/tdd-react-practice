import Axios from "axios";

export const addTask = (task) => {
    return {
        type: 'ADD_TASK',
        payload: {
            task,
        },
    };
} 

export const deleteTask = (position) => {
    return {
        type: 'DELETE_TASK',
        payload: {
            position,
        },
    };
} 

export const getAsyncTask = (id) => async (dispatch) => {
    try {
        const response =  await Axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
        const todo = response.data;
        return dispatch({ type: 'FETCH_TODO_SUCCESS', payload: { todo }});
    } catch (error) {
        const errorResponse = error.response.data;
        return dispatch({ type: 'FETCH_TODO_ERROR', payload: { error: { title: errorResponse.title, message: errorResponse.message } } });
    }
}