import React from 'react'
import { Todo } from './types'

interface TodoListItemProps {
  todo: Todo
  toggleTodo: (selectedTodo: Todo) => void
}

export const TodoListItem: React.FC<TodoListItemProps> = ({ todo, toggleTodo }) => {
  return (
    <li>
      <label style={{ textDecoration: todo.complete ? "line-through" : "none" }}>
        <input type="checkbox" checked={todo.complete} onChange={() => toggleTodo(todo)}/>
        {todo.text}
      </label>
    </li>
  )
}

export default TodoListItem
