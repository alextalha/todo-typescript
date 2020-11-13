import React, {useContext } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { TodoContextType } from '../contexts/TodoContextType';
import { TodoContext } from '../contexts/TodoContext';


const schema = yup.object().shape({
    title: yup.string().required('Tarefa Inválida')
})

interface AddTodoForm {
     title: string
}

const AddTodo = () => {
    const { addTodo } = useContext<TodoContextType>(TodoContext)

    const onSubmit = (data: AddTodoForm, e: any) => {
        addTodo(data.title);
        e.target.reset();
        window.location.href = '/'
    }


    const { register , handleSubmit, errors} = useForm({
        resolver: yupResolver(schema)
    })
    return (
       <form onSubmit={handleSubmit<AddTodoForm>(onSubmit)}>
           <h4>Nova Tarefa</h4>
           <div className="uk-margin uk-width-1-1">
               <input className="uk-input" ref={register} type="text" name="title" id="title" placeholder="Nova Tarefa..." />
                <span><small><strong className="uk-text-danger">{errors.title?.message}</strong></small></span>
           </div>
            <div className="uk-width-1-1">
                <button type="submit" className="uk-button uk-button-primary">Salvar </button>
            </div>
        </form>
    )
}


export default AddTodo;
