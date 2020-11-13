import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import { TodoContextType } from '../contexts/TodoContextType';
import { Todo } from '../models/Todo';

interface TodoListItemProps {
    todo: Todo
}

const TodoListItem = (props: TodoListItemProps) => {


   const { removeTodo , toogle } = useContext<TodoContextType>(TodoContext)
    const onRemove = (todo: Todo) => {
        removeTodo(todo)
    }

    const handleChange = (event: any) => {
        toogle(props.todo)
    }

    return (
       <tr className="uk-animation-slide-bottom-medium">
           <td className="uk-width-auto">
               <label htmlFor="">
                   <input className="uk-checkbox" type="checkbox" 
                   checked={props.todo.done}
                   onChange={handleChange}
                   />
                </label>
            </td>
            <td className="uk-width-expand">{props.todo.title}</td>
            <td className="uk-width-auto"><button className="uk-icon-button uk-button-danger"
             uk-icon="trash"  onClick={ () => onRemove(props.todo)}></button></td>
       </tr>
    )
}

export default TodoListItem