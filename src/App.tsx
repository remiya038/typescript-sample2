import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Todo } from './Todo';
import { boolean, number, string } from 'yargs';


type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

function App() {

  const [todos,setTodos] = useState<Array<TodoType>>([]);

  const onclickFetchData =()=>{
    axios.get<Array<TodoType>>('https://jsonplaceholder.typicode.com/todos').then((res)=>{
    setTodos(res.data);
    })
  }
  return (
    <div className="App">
      <button onClick={onclickFetchData}>データ取得</button>
      {todos.map((obj)=>(
        <Todo title={obj.title} userid={obj.userId}/>
      ))}
    </div>
  );
}

export default App;
