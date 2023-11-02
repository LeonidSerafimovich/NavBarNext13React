import React from 'react'
import CompanySection from '../CompanySection/CompanySection'
import FollowUsSection from '../FollowUsSection/FollowUsSection'

const Footer = () => {
	return (
		<div className='bg-[#24262b] flex flex-col flex-wrap justify-center items-center relative'>
			<FollowUsSection />
			<div className='mt-2'>
				<CompanySection />
			</div>
		</div>
	)
}

export default Footer
