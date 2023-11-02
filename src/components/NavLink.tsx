import Link from 'next/link'

export default function NavLink({ href, text }) {
	return (
		<li className='mr-4 lg:mr-4 hover:text-pink-500 transition duration-400'>
			<Link href={href}>{text}</Link>
		</li>
	)
}
