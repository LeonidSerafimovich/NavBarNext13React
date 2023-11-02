import React from 'react'
import AddCardMain from '../../src/components/CompAddcard/AddCardMain'
import Footer from '../FooterComponents/FooterMain/Footer'

export const metadata = {
	title: 'addcard',
	description: 'description for the addcard page'
}

export default function Home() {
	return (
		<>
			<div className='mt-[100px] flex justify-center bg-slate-100'>
				<AddCardMain />
			</div>
			<Footer />
		</>
	)
}
