'use client'
import { useEffect, useState } from 'react';
import styles from './styles.module.css'
import Link from 'next/link'
import { DrawerMenu } from './DrawerMenu';
import useWindowSize from '@/hooks/useWindowSize';

export const Navbar = () => {
    const size = useWindowSize()
    console.log('SIZE', size);
	return (
        size.width <= 768 ?
        <>
            <DrawerMenu />
        </>
        : 
        <nav className={styles.navbar}>
            <ul className="flex gap-4">
                <li><Link href={'/'} className='hover:text-accent transition-all'>Inicio</Link></li>
                <li><Link href={'/posteos'} className='hover:text-accent transition-all'>Categorías</Link></li>
                <li><Link href={'#'} className='hover:text-accent transition-all'>Contacto</Link></li>
            </ul>
        </nav>
	)
}
