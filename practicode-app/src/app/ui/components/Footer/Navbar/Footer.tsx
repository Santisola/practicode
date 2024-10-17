import styles from './styles.module.css'

export const Footer = () => {
  return (
    <footer className={`${styles.footer} mt-8`}>
      <div className='container m-auto md:flex items-center justify-between py-4 text-center'>
        <p>© 2024 Practicode. Todos los derechos reservados.</p>
        <p>Developed by Santiago <strong style={{color: '#0059f7'}}>Isola</strong></p>
      </div>
    </footer>
  )
}
