import Image from 'next/image'
import styles from './styles.module.css'
import logo from '@/assets/practicode-white.svg'
import Link from 'next/link'
import { Navbar } from './Navbar'

export const Header = () => {
	return (
		<header className={`${styles.header} sticky top-0 z-50`}>
			<div className='container flex justify-between m-auto py-6 px-4'>
				<h1 className={styles.mainLogo}>
					<Link href={'/'}>
						<Image src={logo} alt="Logo Practicode" />
					</Link>
				</h1>
				<Navbar />
			</div>
		</header>
	)
}
