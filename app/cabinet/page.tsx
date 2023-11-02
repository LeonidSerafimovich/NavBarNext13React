import React from 'react'
import CabinetMain from '../../src/components/cabinetComponents/cabinetMain'
import Footer from '../FooterComponents/FooterMain/Footer'

export const metadata = {
	title: 'Personal Cabinet',
	description: 'description for the Personal Cabinet page'
}

export default function Home() {
	return (
		<div className='mt-[100px]'>
			<div>
				<CabinetMain />
				<Footer />
			</div>
		</div>
	)
}
