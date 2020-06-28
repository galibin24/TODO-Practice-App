export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';

const initialState = {todos: []};


function TodoReducer(state = initialState, action){
    switch (action.type){
        case ADD_TODO:
            return Object.assign({}, state, 
                {todos: 
                    [...state.todos, {...action.payload, id : state.todos.length + 1} ]});
        case DELETE_TODO:
            return Object.assign({}, state, {todos: state.todos.filter(todo => todo.id !== action.payload)});
        default:
            return state;
    }
}

export default TodoReducer;
