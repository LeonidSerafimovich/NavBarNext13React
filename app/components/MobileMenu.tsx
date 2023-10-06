import Link from 'next/link'

export default function MobileMenu({
	menuIcon,
	handleSmallerScreenNavigation
}) {
	return (
		<div
			className={
				menuIcon
					? 'md:hidden bg-gradient-to-r from-black to-blue-700 text-white text-center ease-in duration-100 absolute top-[100px] right-0 bottom-0 left-0 flex justify-center items-center w-full h-screen'
					: 'md:hidden bg-gradient-to-r from-black to-blue-700 text-white text-center ease-in duration-200 absolute top-[180px] right-0 left-[-100%] flex justify-center items-center w-full h-screen'
			}
		>
			{/* Линки в маленьком навбаре */}
			<div className='w-full'>
				<ul className='uppercase font-bold text-2xl'>
					<li
						onClick={handleSmallerScreenNavigation}
						className='py-5 hover:text-red-600 transition duration-400 cursor-pointer '
					>
						<Link href='/'>home</Link>
					</li>
					<li
						onClick={handleSmallerScreenNavigation}
						className='py-5 hover:text-red-600 transition duration-400 cursor-pointer '
					>
						<Link href='/about'>about</Link>
					</li>
					<li
						onClick={handleSmallerScreenNavigation}
						className='py-5 hover:text-red-600 transition duration-400 cursor-pointer '
					>
						<Link href='contacts'>contact</Link>
					</li>
				</ul>
				<div className='flex flex-col justify-center items-center mt-16'>
					<Link href='/login' onClick={handleSmallerScreenNavigation}>
						<button className='bg-blacktext-slate-300  hover:bg-red-600 transition duration-400 hover:text-black rounded-full uppercase font-bold py-3 w-[250px] mb-5 '>
							login
						</button>
					</Link>
					<Link href='/signup' onClick={handleSmallerScreenNavigation}>
						<button className='bg-blacktex t-slate-300 border-b-2 text-slate-300 hover:bg-red-600 transition duration-400 hover:text-black rounded-full uppercase font-bold py-3 w-[250px] mb-5 '>
							sign up
						</button>
					</Link>
				</div>
			</div>
		</div>
	)
}
