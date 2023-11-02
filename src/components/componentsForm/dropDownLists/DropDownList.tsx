'use client'

import React, { useState, useEffect, useRef } from 'react'

const DropDownList = ({ predefinedValues, defaultText }) => {
	const [selectedValue, setSelectedValue] = useState(null)
	const [menuOpen, setMenuOpen] = useState(false)
	const menuRef = useRef(null)

	const toggleMenu = () => {
		setMenuOpen(!menuOpen)
	}

	const selectValue = value => {
		setSelectedValue(value)
		setMenuOpen(false)
	}

	useEffect(() => {
		const closeMenu = event => {
			if (menuRef.current && !menuRef.current.contains(event.target)) {
				setMenuOpen(false)
			}
		}

		window.addEventListener('click', closeMenu)

		return () => {
			window.removeEventListener('click', closeMenu)
		}
	}, [])

	return (
		<div className='w-72 font-medium relative' ref={menuRef}>
			<div
				onClick={toggleMenu}
				className={`bg-white hover:border-sky-500 duration-300 border-2 w-full p-2 flex items-center justify-between rounded ${
					!selectedValue && 'text-gray-400'
				}`}
			>
				{selectedValue || defaultText}
			</div>
			{menuOpen && (
				<ul className='bg-white mt-2 overflow-y-auto absolute z-10'>
					{predefinedValues.map(value => (
						<li
							key={value}
							className={`p-2 text-sm border-2 hover:bg-sky-500 duration-300 w-72`}
							onClick={() => {
								selectValue(value)
							}}
						>
							{value}
						</li>
					))}
				</ul>
			)}
		</div>
	)
}

export default DropDownList
