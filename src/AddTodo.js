import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from './actions/AddTodo'

function AddTodo(){
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const dispatch = useDispatch() 

    function onChange(event) {  
        // if event.target.value stored in a variable throws an error
        (event.target.placeholder === 'Title') ?
        setTitle(event.target.value):
        setDescription(event.target.value)     
      }
    
    const submit = (e) =>{
        e.preventDefault()
        let todo = {title: title, description: description}
        dispatch(addTodo(todo))
    }
    return (
        <form onSubmit={submit}>
            <input type='text' placeholder='Title' onChange = {onChange} />
            <br/> 
            <br/>
            <textarea placeholder = 'Description' onChange = {onChange}/>
            <br/>
            {/* why calling submit directly from click causing page to relod? */}
            <button type='submit'>Add Todo</button>
        </form>
    )
}


export default AddTodo







