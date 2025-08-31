import Image from "next/image"
import example from "@/assets/img/example.jpg"

export default function Home() {
  return (
    <div className='container-full h-[50vh] perfect-center gap-10 bg-base-200'>
      <h1 className='font-h1 text-base-soft-content'>Hello World!</h1>
      <figure className='h-52 aspect-[9/16] relative rounded-lg overflow-hidden'>
        <Image
          alt='immagine di esempio'
          className='object-cover'
          fill
          placeholder='blur'
          src={example}
        />
      </figure>
    </div>
  )
}
