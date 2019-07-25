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