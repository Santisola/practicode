import styles from './styles.module.css'

export const Navbar = () => {
  return (
    <header className={`${styles.header}`}>
        <div className='container flex justify-between m-auto py-6'>
            <h1>Practi&#60;code&#62;</h1>

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
