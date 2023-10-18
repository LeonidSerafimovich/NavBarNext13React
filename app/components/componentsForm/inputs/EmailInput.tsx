import React, { useState } from 'react'

function EmailInput() {
	const [email, setEmail] = useState('')

	const handleEmailChange = event => {
		setEmail(event.target.value)
	}

	return (
		<div>
			<input
				type='email'
				id='email'
				name='email'
				value={email}
				onChange={handleEmailChange}
				placeholder='Введите ваш email'
				className='outline-none border-2 hover:border-red-500 duration-150 rounded-md py-1 px-6'
			/>
		</div>
	)
}

export default EmailInput
