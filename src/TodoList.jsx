import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({todos, toggleTodo, deleteTodo}) => {
  return (
    <ul className='list'>
      {todos.length === 0 && "List is Empty"}
      {todos.map(todo => {
        return (
        <TodoItem {...todo} key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
        )
      })} 
    </ul>
  )
}

export default TodoList