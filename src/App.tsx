import React, {useState} from 'react';
import {AppHeader} from './components/AppHeader';
import {TodoList} from './components/TodoList';
import {Todo} from './Types/Todo'
import {v4} from "uuid";
import './App.css';

const App:React.FC= () => {
  const [todos, setTodos] = useState<Array<Todo>>([]);
  
  const addTodo = (todoItem: string): void => {
    console.log('m');
    return setTodos([...todos, {content: todoItem, completed: false, id: v4()}]);
  }
  const toggleTodo =(id:string): void => {
    const completeArray = todos.map(item=> {
      if (item.id === id ) {
        item.completed= !item.completed
      } return item
    });
    return setTodos([...completeArray]);
  } 

  const deleteTodo = (id: string): void => {
    return setTodos([...todos.filter(item=> item.id !== id)])
  }


  return (
    <div className="App">
      <AppHeader addTodo={addTodo}/> 
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </div>
  );
}

export default App;
