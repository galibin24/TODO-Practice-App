
export const DeleteTodo = (id) => {
    return {
        type: 'DELETE TODO',
        payload: id,
    }
}
