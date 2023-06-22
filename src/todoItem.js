import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo } from "./redux/modules/todos";


const TodoItem=({todo})=>{
    const dispatch = useDispatch();
    const {id, title, item, isDone}=todo;
  
    const handleClick=()=>{
      dispatch(removeTodo(id))
    };

    return(
        <div>
        <text>{title}</text>
        <text>{item}</text>
        <button onClick={handleClick}>{isDone ? "완료":"Mark as Done"}</button>
        </div>
    );
  };

  export default TodoItem;