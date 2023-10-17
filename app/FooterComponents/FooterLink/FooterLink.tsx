import React from 'react'

interface FotterLinkProps {
	href: string
	text: string
}

const FooterLink: React.FC<FotterLinkProps> = ({ href, text }) => (
	<li className='hover:text-white mr-6 mt-2 ease-in-out hover:-translate-y-2 hover:scale-300 duration-200'>
		<a href={href}>{text}</a>
	</li>
)

export default FooterLink
