import React, { useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import reducer, { markTodoAsDone, addTodo, removeTodo, cancelTodo } from './redux/modules/todos';
function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  useEffect(()=>{
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    if (storedTodos.length > 0) {
      storedTodos.forEach((todo) => {
        dispatch(addTodo(todo.title, todo.item, todo.isDone));
      });
    }
  }, [dispatch]);


  const handleMarkTodoAsDone=(selectedId) => {
    dispatch(markTodoAsDone(selectedId))
  };

  const handleRemoveTodo=(selectedId)=> {
    dispatch(removeTodo(selectedId))//dispatch(ACTION)
  };
  const handleCancelTodo = (selectedId) => {
    dispatch(cancelTodo(selectedId))//dispatch(ACTION)
  };

  const [title, setTitle] = useState('');
  const [item, setItem] = useState('');


  const handleClick=()=>{
    if (title.trim() !== '' && item.trim() !== '') {
    const todo={
        title:title,
        item:item,
        isDone:false,
      };

  dispatch(addTodo(todo));
  setTitle('');
  setItem('');
  }
};

  const handleKeyPress=(e)=>{
    if(e.key==="Enter"){
      handleClick();
      }
    };

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

   return (
    <div>
      <h1>todolist</h1>
      <input
        type='text'
        placeholder='제목'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={handleKeyPress}/>
      <input
         type='text'
         placeholder='할 일을 입력하세요'
         value={item}
         onChange={(e) => setItem(e.target.value)}
         onKeyDown={handleKeyPress}/>
      <button onClick={handleClick}>추가하기</button>
      <div className='workingList'>
        <h2>Working...</h2>
        {todos.length > 0 ? (
          todos.map((todo) => {
            if (!todo.isDone) {
              return (
                <h3 key={todo.id}>
                  {todo.title}-{todo.item}
                  <button onClick={() => handleMarkTodoAsDone(todo.id)}>Mark as Done</button>
                  <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
                </h3>
              );
            }
            return null;
          })
        ) : (
          <p>No active todos.</p>
        )};
      </div>
      <div className='doneList'>
        <h2>Done ! </h2>
        {todos.length > 0 ? (
          todos.map((todo) => {
            if (todo.isDone) {
              return (
                <h3 key={todo.id}>
                  {todo.title}
                  <button onClick={() => handleMarkTodoAsDone(todo.id)}>Mark as Undone</button>
                  <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
                </h3>
        );
       }
       return null;
      }) ) : (
        <p>No completed todos.</p>
      )}
    </div>
    </div>)};


export default App;
