'use client'
import { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import AuthButtons from './AuthButtons'
import Logo from './Logo'
import MobileMenu from './MobileMenu'
import NavLink from './NavLink'

export default function Navbar() {
	const [menuIcon, setIcon] = useState(false)

	const handleSmallerScreenNavigation = () => {
		setIcon(!menuIcon)
	}

	return (
		<header className='bg-[#24262b] text-gray-200 w-full ease-in duration-800s fixed top-0 left-0 z-50 '>
			<nav className='max-w-[1366px] mx-auto h-[100px] flex justify-between items-center p-4 '>
				<Logo />
				{/* Увеличенный экран навигации */}
				<ul className=' text-gray-200 normal-case hidden items-center md:flex  font-semibold text-1xl lg:text-[20px]'>
					<NavLink href='/' text='Обьявления' />
					<NavLink href='/addcard' text='Подать объявление' />
					<NavLink href='/contacts' text='Контакты' />

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
