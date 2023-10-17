import React from 'react'
import FooterLink from '../FooterLink/FooterLink'

const CompanySection = () => {
	return (
		<div className='mr-8 mt-2 ml-2 text-2xl text-gray-200 font-semibold mb-7'>
			<ul className='text-stone-400 font-normal flex'>
				<FooterLink href='#' text='О проекте' />
				<FooterLink href='#' text='Правила' />
				<FooterLink href='#' text='Статьи' />
				<FooterLink href='#' text='Контакты' />
				<FooterLink href='#' text='Реклама' />
			</ul>
		</div>
	)
}

export default CompanySection
