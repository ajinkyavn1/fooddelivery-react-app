import React, { useState } from "react";
import './todo.css'

function Todo(){
    const [todo,setTodo]=useState('');
    const [Todos,setTodos]=useState([])
    const SubmitTodo=()=>{
        setTodos((todos)=>{
           return [...todos,todo]

        });
    }
    const todsInput=(event)=>{
        setTodo(event.target.value)
        console.log(event.target.value)
    }
    const DelteTodo=(todoId)=>{
       console.log(todoId)
    }
    return <>
    <h1>Welcome To TODO application </h1>
        <div className="Container">
            <div className="Form">
              
                <input type="text" placeholder="Enter Todo " onChange={todsInput}/>
                <br/>
                <button onClick={SubmitTodo}>Submit Todo</button>
                
            </div>
            <div className="CardTodo">
                    <ol>
                        {Todos.map((value,key)=>{
                            return <li>{value} <button className="deleteTodo" onClick={DelteTodo(key)}>Delete</button></li>
                        })}
                    </ol>
            </div>
        </div>
    </>
} 

export default Todo;