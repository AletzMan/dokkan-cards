import Image from 'next/image'
import Link from 'next/link'
import { Section } from './components/Section'

export default function NotFound() {
  return (
    <Section>
      <div className='flex flex-col items-center justify-center h-screen  text-white text-center px-6'>
        <h1 className="text-6xl font-bold text-yellow-400 animate-pulse">404</h1>
        <h2 className="text-3xl font-semibold mt-2">¡Oops! Página no encontrada</h2>
        <p className="text-lg mt-2 text-gray-400">Parece que te perdiste en otro universo...</p>
        <p className="text-lg mt-2 text-gray-400">¿Tal vez fuiste transportado por los dioses de la destrucción?</p>
        <div className='relative'>
          <div className='absolute left-[calc(50%-30px)] top-[calc(50%-25px)] animate-ping z-10 w-3 h-3 bg-red-600 rounded-full'></div>
          <Image
            src="/radar.webp"
            alt="Goku Perdido"
            className="w-60 h-auto mt-4"
            width={300}
            height={300}
          />
        </div>
        <Link href="/" className="mt-6 px-6 py-2 bg-yellow-400 text-black font-bold rounded-md hover:bg-yellow-500 transition-all">
          Volver a Kame House 🏠
        </Link>
      </div>
    </Section>
  )
}