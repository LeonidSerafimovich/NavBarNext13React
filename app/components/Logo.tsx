import Link from 'next/link'

export default function Logo() {
	return (
		<div>
			<Link href='/'>
				<span className='font-extrabold text-3xl md:text-2xl xl:text-3xl uppercase'>
					LogoImg
				</span>
			</Link>
		</div>
	)
}
