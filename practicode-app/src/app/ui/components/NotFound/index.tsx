import gif from '@/assets/404.gif'
import Image from 'next/image'
import Link from 'next/link'

export default function PageNotFound({title = 'Oops! No encontramos la página que estás buscando'}: {title?: string}) {
  return (
    <div>
        <h2 className='text-center text-4xl'>{title}</h2>
        <div className='flex justify-center bg-black rounded-lg my-6 max-h-[400px]'>
            <Image
                src={gif}
                alt='Ojos perdidos'
                className='object-contain'
            />
        </div>
        <Link href="/" className='text-center block w-fit mx-auto hover:text-[color:--accent-color]'>Volver al inicio</Link>
    </div>
  )
}
