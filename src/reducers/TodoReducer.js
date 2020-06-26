
function TodoReducer(state = [], action){
    switch (action.type){
        case 'ADD TODO':
            return [...state, action.payload]
        case "DELETE TODO":
            return state.filter(todo => (todo.description + todo.title ) !== action.payload)
        default:
            return state
    }
}

export default TodoReducer













