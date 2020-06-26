import React from 'react'
import { useSelector } from 'react-redux'
import {useDispatch} from 'react-redux'
import {DeleteTodo} from './actions/DeleteTodo'

function Todo(){
    const dispatch = useDispatch()

    const onChange = (e) =>{
        dispatch(DeleteTodo(e.target.id))
    }
    
    const todos = useSelector(state => state.todo)
    
    let show_todo = todos.map(todo => {
        return ( 
        <div key = {todo.description}>{todo.title}
                {/* I am not sure how to implement it here*/}
                <input type = 'checkbox' onChange = {onChange} id = {todo.description + todo.title}/>
            <li>{todo.description}</li>
            <br/>
        </div>)
        
    })

    return(
        <div>{show_todo}</div>

    )
}

export default Todo









