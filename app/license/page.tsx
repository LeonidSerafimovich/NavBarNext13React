import React from 'react'

import AllowMain from '../../src/components/allowComponents/allowMain'
import LicenseMain from '../../src/components/licenseComponents/licenseMain'
import Footer from '../FooterComponents/FooterMain/Footer'

export const metadata = {
	title: 'License',
	description: 'description for the license page'
}

export default function Home() {
	return (
		<>
			<div className='flex min-h-screen flex-row justify-center items-start bg-gradient-to-r from-white to-[#24262b]'>
				<div className='mt-[150px] font-bold text-center'>
					<span className=''> Виды лицензий:</span>
					<LicenseMain />
				</div>
				<div className='mt-[150px] font-bold  ml-4 text-center'>
					<span className='mr-8 '> Виды Разрешений:</span>
					<AllowMain />
				</div>
			</div>
			<Footer />
		</>
	)
}
