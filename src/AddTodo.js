import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from './actions/AddTodo'

function AddTodo(){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();

    function onChangeTitle(event) {  
        setTitle(event.target.value);
      }
    
    function onChangeDescription(event) {  
        setDescription(event.target.value);
    }

    const onSubmit = (e) =>{
        // e.preventDefault();
        let todo = {title: title, description: description};
        dispatch(addTodo(todo));
    }

    return (
        <form>
            <input type='text' placeholder='Title' onChange={onChangeTitle} />
            <br/> 
            <br/>
            <textarea placeholder='Description' onChange={onChangeDescription}/>
            {/* why calling submit directly from click causing page to relod? */}
            <button type='button' onClick={onSubmit} >Add Todo</button>
        </form>
    )
}


export default AddTodo;
