import Link from 'next/link'

export default function MobileMenu({
	menuIcon,
	handleSmallerScreenNavigation
}) {
	return (
		<div
			className={
				menuIcon
					? 'md:hidden bg-gradient-to-r from-[#24262b] to-white text-white text-center ease-in duration-100 absolute top-[100%] right-0 bottom-0 left-0 flex justify-center items-center w-full h-screen'
					: 'md:hidden bg-gradient-to-r from-[#24262b] to-white text-white text-center ease-in duration-200 absolute top-[100%] right-0 left-[100%] flex justify-center items-center w-full h-screen'
			}
		>
			{/* Линки в маленьком навбаре */}
			<div className='w-full'>
				<ul className='uppercase font-bold text-2xl'>
					<li
						onClick={handleSmallerScreenNavigation}
						className='py-5 hover:text-black transition duration-700 cursor-pointer '
					>
						<Link href='/'>объявление</Link>
					</li>
					<li
						onClick={handleSmallerScreenNavigation}
						className='py-5 hover:text-black transition duration-700 cursor-pointer '
					>
						<Link href='/about'>Добавить объявление</Link>
					</li>
					<li
						onClick={handleSmallerScreenNavigation}
						className='py-5 hover:text-black transition duration-700 cursor-pointer '
					>
						<Link href='contacts'>Контакты</Link>
					</li>
				</ul>
				<div className='flex flex-col justify-center items-center mt-16'>
					<Link href='/login' onClick={handleSmallerScreenNavigation}>
						<button className='bg-red-600 border-2 hover:bg-red-400 bg-blacktext-slate-300 transition duration-700 hover:text-black rounded-full uppercase font-bold py-3 w-[250px] mb-5 '>
							войти
						</button>
					</Link>
					<Link href='/signup' onClick={handleSmallerScreenNavigation}>
						<button className='bg-blacktex t-slate-300 border-2  text-white hover:bg-red-600 transition duration-700 hover:text-black rounded-full uppercase font-bold py-3 w-[250px] mb-5 '>
							зарегестрироваться
						</button>
					</Link>
				</div>
			</div>
		</div>
	)
}
