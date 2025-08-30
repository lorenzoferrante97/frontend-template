/** biome-ignore-all lint/correctness/noUnreachable: testing error */
import api from "@/utils/api"

export default async function Blog() {
  // simulazione errore per vedere error.jsx
  // throw new Error("Qualcosa è andato storto!")

  const users = await api.fetchUsers()
  const { todos, comments } = await api.fetchToDosComments()

  // simulazione ritardo caricamento fetch per vedere loading.jsx
  await new Promise((resolve) => setTimeout(resolve, 3000))

  return (
    <div className='container-full min-h-[50vh] flex flex-col gap-4 bg-primary-soft'>
      <h1 className='font-h1 text-primary-soft-content'>Blog Home!</h1>
      <h2 className='font-h2'>Users</h2>
      <ul className='list-disc pl-5'>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
      <h2 className='font-h2'>Todos</h2>
      <ul className='list-disc pl-5'>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title} ({todo.id})
          </li>
        ))}
      </ul>
      <h2 className='font-h2'>Comments</h2>
      <ul className='list-disc pl-5'>
        {comments.map((comment) => (
          <li key={comment.id}>
            {comment.name} ({comment.email})
          </li>
        ))}
      </ul>
    </div>
  )
}
