'use client'

import { useState } from 'react';
import styles from './styles.module.css'
import Link from 'next/link'
import MenuIcon from './MenuIcon';

export const DrawerMenu = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMobileMenuOpen(!mobileMenuOpen)
    }

	return (
        <div className='flex items-center'>
            <button onClick={handleMenuToggle}>
                <MenuIcon width={'1.5rem'} height={'1.5rem'} />
            </button>

            <div className={mobileMenuOpen ? styles.opened : styles.closed}>
                <div className='fixed inset-0 h-screen bg-darkBackground opacity-50' onClick={handleMenuToggle}></div>
                <nav className={`${styles.navbar} fixed w-3/4 bg-darkBackground h-screen top-0 right-[-100%] transition-all py-6`}>
                    <ul className="gap-4">
                        <li>
                            <Link href={'/'} className='hover:text-accent transition-all flex items-center gap-1 p-4' onClick={handleMenuToggle}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M5 12H3l9-9l9 9h-2M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7"></path><path d="M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6"></path></g></svg>
                            Inicio
                            </Link>
                        </li>
                        <li>
                            <Link href={'/posteos'} className='hover:text-accent transition-all flex items-center gap-1 p-4' onClick={handleMenuToggle}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 3l-4 7h8zm2 14a3 3 0 1 0 6 0a3 3 0 1 0-6 0M4 15a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z"></path></svg>
                            Categorías
                            </Link>
                        </li>
                        <li>
                            <Link href={'#'} className='hover:text-accent transition-all flex items-center gap-1 p-4' onClick={handleMenuToggle}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m21 14l-3-3h-7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1zm-7 1v2a1 1 0 0 1-1 1H6l-3 3V11a1 1 0 0 1 1-1h2"></path></svg>
                            Contacto
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
	)
}
