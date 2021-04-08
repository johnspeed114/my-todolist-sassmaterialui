import React from "react";
import {Todo} from '../Types/Todo'

interface TodoListProp {
    todos: Array<Todo>;
    toggleTodo(prop: string): void;
    deleteTodo(prop: string): void;
}
export const TodoList: React.FunctionComponent<TodoListProp> = ({todos, toggleTodo, deleteTodo}) => {
    const handleToggle = (id: string): void => {
        console.log(id);
        toggleTodo(id);
    }

    const handleDelete =(id: string ): void => {
        console.log('delete bitch!');
        deleteTodo(id);
    }

    return (
        <ul>
            {todos.map((todo) => { return (
                <li key={todo.content.toString()}>
                    <input type="checkbox" onChange={():void=>handleToggle(todo.id)}/> 
                    {todo.content} Complete: {todo.completed.toString()} 
                    <button onClick={():void=>handleDelete(todo.id)}>delete</button>
                </li>
            ) } ) }

        </ul>
    )
}