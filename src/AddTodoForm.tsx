import React, {ChangeEvent, FormEvent, useState} from 'react'
import { AddTodo } from './types'

interface AddTodoFormProps {
  addTodo: AddTodo
}

export const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState('')
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    addTodo(newTodo)
    setNewTodo('')
  }
  return (
    <form>
      <input type="text" value={newTodo} onChange={handleChange}></input>
      <button type="submit" onClick={handleSubmit}>Add todo</button>
    </form>
  )
}