import Image from 'next/image'
import styles from './styles.module.css'
import logo from '@/assets/practicode-white.svg'
import Link from 'next/link'

export const Navbar = () => {
  return (
    <header className={`${styles.header} sticky top-0 z-50`}>
        <div className='container flex justify-between m-auto py-6'>
            <h1 className={styles.mainLogo}>
              <Link href={'/'}>
                <Image src={logo} alt="Logo Practicode" />
              </Link>
            </h1>

            <nav>
                <ul className="flex gap-4">
                    <li><Link href={'/'}>Inicio</Link></li>
                    <li>Categorías</li>
                    <li>Conocenos</li>
                    <li>Contacto</li>
                </ul>
            </nav>
        </div>
    </header>
  )
}
