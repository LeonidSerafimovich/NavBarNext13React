import React from 'react'
import CabinetMain from '../cabonetComponents/cabinetMain'
import Footer from '../FooterComponents/FooterMain/Footer'

export const metadata = {
	title: 'Personal Cabinet',
	description: 'description for the Personal Cabinet page'
}

export default function Home() {
	return (
		<div className='mt-[200px]'>
			<h1 className='font-bold text-center'>Личный кабинет</h1>
			<div>
				<CabinetMain />
				<Footer />
			</div>
		</div>
	)
}
