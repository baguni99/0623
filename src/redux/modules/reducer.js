import { 
    ADD_TODO,
    MARK_TODO_AS_DONE,
    REMOVE_TODO,
    CANCEL_TODO,
} from './todos';

//초기 상태값
const initialState=[];

// reducer 생성
function reducer (state = initialState, action) {
    switch (action.type) {
      case ADD_TODO:
        return [...state,action.payload]
      case MARK_TODO_AS_DONE:
        return state.map((todo) =>
            todo.id === action.payload.id ? { ...todo, isDone: action.payload.isDone } : todo
          );
      case REMOVE_TODO:
        return state.filter((todo) => todo.id !== action.payload.id);
      case CANCEL_TODO:
        return state.map((todo) =>
            todo.id === action.payload.id ? { ...todo, isDone: false } : todo
          );
      default:
        return state;
    }
  };
  
  export default reducer;
  
