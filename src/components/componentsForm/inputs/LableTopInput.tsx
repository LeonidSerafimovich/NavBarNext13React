'use client'

import React, { forwardRef, useRef } from 'react'

interface ILableTopInputProps {
	type?: string
	id: string
	name: string
	placeholder?: string
	label?: string
	required?: boolean
}

const LableTopInput = forwardRef<HTMLInputElement, ILableTopInputProps>(
	({ type, id, name, placeholder, label, required, ...rest }, ref) => {
		const inputRef = useRef<HTMLInputElement>(null)

		const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
			const { value } = e.target
		}

		return (
			<div className='relative bg-inherit '>
				<input
					type={type}
					id={id}
					name={name}
					onChange={handleChange}
					className='peer bg-transparent h-10 w-[295px] rounded-lg text-black placeholder-transparent ring-2 px-2 ring-gray-300 focus:ring-sky-600 focus:outline-none'
					placeholder={placeholder}
					required={required}
					ref={input => {
						inputRef.current = input
						if (typeof ref === 'function') {
							ref(input)
						} else if (ref) {
							ref.current = input
						}
					}}
					{...rest}
				/>
				<label
					htmlFor={id}
					onClick={() => inputRef.current?.focus()}
					className='absolute cursor-text left-0 -top-3 rounded-md text-sm text-gray-500 bg-white mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all'
				>
					{label}
				</label>
			</div>
		)
	}
)

export default LableTopInput
