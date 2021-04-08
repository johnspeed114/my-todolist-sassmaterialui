import React, { FormEvent, useState } from 'react';


interface AppHeaderProp {
    addTodo(prop: string): void;
}
export const AppHeader: React.FunctionComponent<AppHeaderProp> = ({addTodo}) => {
    const [newTodo, setNewTodo] = useState('');

    const handleSubmit = (e:FormEvent<HTMLFormElement>): void => {
        e.preventDefault(); 
        addTodo(newTodo);
        setNewTodo('');
        
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={(event):void => setNewTodo(event.target.value)} placeholder="Please Enter Your Todo Item Here" />
            </form>
        </div>

    )
}