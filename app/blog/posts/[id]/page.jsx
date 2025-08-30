export default function Post({ params }) {
  const id = params.id

  return (
    <div className='container-full min-h-[50vh] flex flex-col gap-4 bg-secondary-soft'>
      <h1 className='font-h1 text-secondary-soft-content'>Post page {id}</h1>
    </div>
  )
}
