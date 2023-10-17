import React from 'react'
import Footer from '../FooterComponents/FooterMain/Footer'
import AddCardMain from '../CompAddcard/AddCardMain'

export const metadata = {
	title: 'About',
	description: 'description for the about page'
}

export default function Home() {
	return (
		<>
			<div className='mt-[150px]'>
				<AddCardMain />
				<Footer />
			</div>
		</>
	)
}
