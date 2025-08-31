export default function Post({ params }) {
  const { category, id } = params

  return (
    <div className='container-full min-h-[50vh] flex flex-col gap-4 bg-secondary-soft'>
      <h1 className='font-h1 text-secondary-soft-content'>Post page {id}</h1>
      <h2 className='font-h2 text-secondary-soft-content'>Category: {category}</h2>
    </div>
  )
}
