const initialState = {
    tasks: [],
};

const toDo = (state, action) => {
    if (typeof state === 'undefined') {
        return initialState;
    }
    switch (action.type) {
        case 'ADD_TASK':
            return {
                tasks: [ ...state.tasks, action.payload.task ],
            }
        case 'DELETE_TASK':
            const pos = action.payload.position;
            return {
                tasks: [ ...state.tasks.slice(0, pos), ...state.tasks.slice(pos + 1)],
            }
        default:
            return state;
    }
};
  
  export default toDo;