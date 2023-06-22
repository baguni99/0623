import reducer from "./reducer";
//액션 정의
const MARK_TODO_AS_DONE="MARK_TODO_AS_DONE"
const ADD_TODO="ADD_TODO"
const REMOVE_TODO="REMOVE_TODO"
const CANCEL_TODO="CANCEL_TODO";

//액션생성함수
export function markTodoAsDone(id) {
    return{
      type:MARK_TODO_AS_DONE,
      payload: {
        id:id,
        isDone:true
  }};
}

export function addTodo(title, item, isDone) {
    return {
      type:ADD_TODO,
      payload:{
        title: title,
        item: item,
        isDone: false, 
     },
}};
export function removeTodo(id) {
    return {
        type:REMOVE_TODO,
        payload:{id: id}
    }};

export function cancelTodo(id,text) {
    return {
     type:CANCEL_TODO,
     payload:{ is:id, text:text },
    }};

export {
    ADD_TODO,
    MARK_TODO_AS_DONE,
    REMOVE_TODO,
    CANCEL_TODO,
};

export default reducer;
      