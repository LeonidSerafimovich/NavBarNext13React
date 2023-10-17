import Link from 'next/link'
import { GiGunshot } from 'react-icons/gi'

export default function Logo() {
	return (
		<div>
			<Link href='/'>
				<div className='font-extrabold flex text-3xl md:text-2xl xl:text-3xl uppercase'>
					Fire <GiGunshot /> Teach
				</div>
			</Link>
		</div>
	)
}
