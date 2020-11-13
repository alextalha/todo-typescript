import React from 'react';
import  TodoContext  from '../contexts/TodoContext';
import NavBar from './NavBar';
import TodoList from './TodoList';
import {  BrowserRouter as Router ,Route, Switch} from 'react-router-dom';
import AddTodo from '../components/AddTodo';
/*
Escopo novo de execução , resolvendo o problema do this anteriormente 

*/
const App = () => {
    return (
        <TodoContext>
            <Router>
                <NavBar></NavBar>
                <br />
                <div className='uk-container'>
                    <Switch>
                        <Route path="/create">
                           <AddTodo />
                        </Route>
                        <Route path="/">
                            <h4>Minha Lista de Tarefas </h4>
                            <TodoList></TodoList>  
                        </Route>   
                    </Switch>
                </div>
            </Router>
        </TodoContext>
    )
}

export default App;

