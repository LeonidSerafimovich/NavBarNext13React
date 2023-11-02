'use client'

import React, { useState, useEffect, useRef } from 'react'
import LicenseInfo from './LicenseInfo'

interface LicenseDescription {
	[license: string]: string
}

interface DropDownLicenseProps {
	predefinedValues: string[]
	defaultText: string
	licenses: LicenseDescription
}

const DropDownLicense: React.FC<DropDownLicenseProps> = ({
	predefinedValues,
	defaultText,
	licenses
}) => {
	const [selectedValue, setSelectedValue] = useState<string | null>(null)
	const [menuOpen, setMenuOpen] = useState(false)
	const menuRef = useRef<HTMLDivElement>(null)

	const toggleMenu = () => {
		setMenuOpen(!menuOpen)
	}

	const selectValue = (value: string) => {
		setSelectedValue(value)
		setMenuOpen(false)
	}

	useEffect(() => {
		const closeMenu = (event: MouseEvent) => {
			if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
				setMenuOpen(false)
			}
		}

		window.addEventListener('click', closeMenu)

		return () => {
			window.removeEventListener('click', closeMenu)
		}
	}, [])

	return (
		<div className='w-72 duration-300  font-medium relative' ref={menuRef}>
			<div
				onClick={toggleMenu}
				className={`bg-white hover:border-sky-500 duration-300 border-2 w-full cursor-pointer p-2 flex items-center justify-between rounded ${
					!selectedValue && 'text-gray-400'
				}`}
			>
				{selectedValue || defaultText}
			</div>
			{menuOpen && (
				<ul className='bg-white mt-2 overflow-y-auto duration-600 cursor-pointer absolute z-10'>
					{predefinedValues.map(value => (
						<li
							key={value}
							className={`p-2 text-sm border-2 hover:bg-sky-500  w-72`}
							onClick={() => {
								selectValue(value)
							}}
						>
							{value}
						</li>
					))}
				</ul>
			)}
			<LicenseInfo licenses={licenses} selectedLicense={selectedValue} />
		</div>
	)
}

export default DropDownLicense
