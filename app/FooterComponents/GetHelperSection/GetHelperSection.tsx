// CompanySection.js
import React from 'react'
import FooterLink from '../FooterLink/FooterLink'

const GetHelperSection = () => {
	return (
		<div className='mr-8 mt-2 ml-2 text-2xl text-gray-200 font-semibold mb-7'>
			<h1 className='font-semibold mb-7 relative'>
				Помощь
				<span className='absolute left-0 bottom-[-10px] w-12 h-[2px] bg-pink-500'></span>
			</h1>
			<ul className='text-stone-400 font-normal'>
				<FooterLink href='#' text='FAQ' />
				<FooterLink href='#' text='shipping' />
				<FooterLink href='#' text='returns' />
				<FooterLink href='#' text='order status' />
				<FooterLink href='#' text='payment options' />
			</ul>
		</div>
	)
}

export default GetHelperSection
