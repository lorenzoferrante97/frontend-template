"use client"

export default function ErrorUI({ error }) {
  return (
    <main className='w-full h-screen perfect-center bg-base-300 text-base-soft-content'>
      <h1 className='font-h1'>
        Errore: <span className='font-body-l-big'>{error.message}</span>
      </h1>
    </main>
  )
}
