'use client'
import { useState } from 'react'
import Logo from './Logo'
import NavLink from './NavLink'
import AuthButtons from './AuthButtons'
import MobileMenu from './MobileMenu'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

export default function Navbar() {
	const [menuIcon, setIcon] = useState(false)

	const handleSmallerScreenNavigation = () => {
		setIcon(!menuIcon)
	}

	return (
		<header className='bg-gradient-to-r from-black to-blue-700 text-red-600 w-full ease-in duration-800s fixed top-0 left-0 z-10'>
			<nav className='max-w-[1366px] mx-auto h-[100px] flex justify-between items-center p-4 '>
				<Logo />
				{/* Увеличенный экран навигации */}

				<ul className=' text-red-600 hidden items-center md:flex uppercase font-semibold text-1xl lg:text-[20px]'>
					<NavLink href='/' text='Home' />
					<NavLink href='/about' text='About' />
					<NavLink href='/contacts' text='Contact' />
					{/* Проверяем, что мобильное меню не активировано */}
					{!menuIcon && <AuthButtons />}
				</ul>

				{/* Маленький экран навигации */}
				<div onClick={handleSmallerScreenNavigation} className='flex md:hidden'>
					{menuIcon ? (
						<AiOutlineClose
							size={30}
							className='text-[5cdb95] hover:text-[#eddada] transition duration-900  '
						/>
					) : (
						<AiOutlineMenu
							size={30}
							className='text-[5cdb95] hover:text-[#eddada] '
						/>
					)}
				</div>
				{/* Выпадающее маленькое окно */}
				<MobileMenu
					menuIcon={menuIcon}
					handleSmallerScreenNavigation={handleSmallerScreenNavigation}
				/>
			</nav>
		</header>
	)
}
