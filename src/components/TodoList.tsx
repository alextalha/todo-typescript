import React, { useContext} from 'react';
import { TodoContext } from '../contexts/TodoContext';
import { TodoContextType } from '../contexts/TodoContextType';
import { Todo } from '../models/Todo';
import TodoListItem from './TodoListItem';


const TodoList = () => {
    const { todos } = useContext<TodoContextType>(TodoContext)

    return (
        <div>
           <table className="uk-table">
               <caption> Lista das Tarefas </caption>
                   <thead>
                       <tr>
                           <th>#</th>
                           <th>Tarefa</th>
                           <th></th>
                       </tr>
                   </thead>
                    <tbody>
                        {
                           todos?.map(
                           todo =>  {
                               return (
                               <TodoListItem key={todo.id} todo={todo}></TodoListItem>)
                           }
                           
                           ) 
                        }
                    </tbody>
           </table>
        </div>
    )


}

export default TodoList;