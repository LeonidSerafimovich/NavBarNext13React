'use client'

import React, { useState } from 'react'
import {
	MdRadioButtonUnchecked,
	MdOutlineCheckCircleOutline
} from 'react-icons/md'

function Checkbox({ label1 }) {
	const [checked1, setChecked1] = useState(false)
	const [currentIcon, setCurrentIcon] = useState(
		<MdRadioButtonUnchecked className='w-6 h-6' />
	)

	const handleCheck1Change = () => {
		setChecked1(!checked1)
		setCurrentIcon(
			checked1 ? (
				<MdRadioButtonUnchecked className='w-6 h-6' />
			) : (
				<MdOutlineCheckCircleOutline className='w-6 h-6 text-green-400' />
			)
		)
	}

	return (
		<div className='user-select: none'>
			<label className='mr-4 cursor-pointer flex user-select:none'>
				{currentIcon}
				<input
					type='checkbox'
					checked={checked1}
					onChange={handleCheck1Change}
					className='invisible user-select:none'
				/>
				{label1}
			</label>
		</div>
	)
}

export default Checkbox
