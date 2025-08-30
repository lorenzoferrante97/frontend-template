import api from "@/utils/api"

export default async function Users() {
  const users = await api.fetchUsers()

  return (
    <ul className='list-disc pl-5'>
      {users.map((user) => (
        <li key={user.id}>
          {user.name} ({user.email})
        </li>
      ))}
    </ul>
  )
}
