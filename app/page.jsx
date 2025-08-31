import Image from "next/image"
import example from "@/assets/img/example.jpg"

export default function Home() {
  return (
    <div className='container-full h-[50vh] perfect-center gap-10 bg-base-200'>
      <h1 className='font-h1 text-base-soft-content'>Hello World!</h1>
      <div className='w-full perfect-center gap-4'>
        {/* local image */}
        <figure className='h-52 aspect-[9/16] relative rounded-lg overflow-hidden'>
          <Image
            alt='immagine di esempio'
            className='object-cover'
            fill
            placeholder='blur'
            src={example}
          />
        </figure>
        {/* url image */}
        <figure className='h-52 aspect-[9/16] relative rounded-lg overflow-hidden'>
          <Image
            alt='immagine di esempio'
            className='object-cover'
            fill
            src='https://images.unsplash.com/photo-1753262081045-ff9b365ef62a?q=80&w=2469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          />
        </figure>
      </div>
    </div>
  )
}
