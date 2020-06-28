import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store';

import AddTodo from './AddTodo'
import Todos from './Todos'

function App(){
    return (
        <Provider store={store}>
            <div>
                <h2>Add Todo
                    <br />
                    <br />
                    <AddTodo/>
                </h2>
                <h2>Todos
                    <br />
                    <br />
                    <Todos />
                </h2>
            </div>
        </Provider>
    )
}   


export default App


