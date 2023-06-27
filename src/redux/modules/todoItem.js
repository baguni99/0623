import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo } from "./todos";


const TodoItem=({ todo })=>{
    const dispatch = useDispatch();
    const { id, title, item, isDone }=todo;
  
    const handleClick=()=>{
      dispatch(removeTodo(id));
    };

    return(
        <div>
        <span>{title}</span>
        <span>{item}</span>
        <button onClick={handleClick}>{isDone ? "완료":"Mark as Done"}</button>
        </div>
    );
  };

  export default TodoItem;