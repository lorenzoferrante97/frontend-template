"use client"

import { useEffect, useState } from "react"
import api from "@/utils/api"
import UsersSkeleton from "./UsersSkeleton"

export default function Todos() {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      api
        .fetchToDosComments()
        .then(({ todos }) => setTodos(todos))
        .then(setLoading(false))
    }, 5000)
  }, [])

  if (loading) {
    return <UsersSkeleton />
  }

  return (
    <ul className='list-disc pl-5'>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.title} ({todo.id})
        </li>
      ))}
    </ul>
  )
}
