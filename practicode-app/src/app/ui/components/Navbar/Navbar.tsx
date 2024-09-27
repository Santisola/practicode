import Image from 'next/image'
import styles from './styles.module.css'
import logo from '@/assets/practicode-white.svg'

export const Navbar = () => {
  return (
    <header className={`${styles.header}`}>
        <div className='container flex justify-between m-auto py-6'>
            <h1 className={styles.mainLogo}>
              <Image src={logo} alt="Logo Practicode" />
            </h1>

            <nav>
                <ul className="flex gap-4">
                    <li>Inicio</li>
                    <li>Categorías</li>
                    <li>Conocenos</li>
                    <li>Contacto</li>
                </ul>
            </nav>
        </div>
    </header>
  )
}
