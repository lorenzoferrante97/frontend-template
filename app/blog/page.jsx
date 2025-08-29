export default async function Blog() {
  // fetch lato server
  const res = await fetch("https://jsonplaceholder.typicode.com/users", { cache: "no-store" })
  const users = await res.json()

  return (
    <div className='container-full h-[50vh] perfect-center bg-primary-soft'>
      <h1 className='font-h1 text-primary-soft-content'>Blog Home!</h1>
      <a href='/'>Torna alla home</a>
      <ul className='list-disc'>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  )
}
