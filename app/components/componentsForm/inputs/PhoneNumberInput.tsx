import 'react-phone-number-input/style.css'
import PhoneInput, { formatPhoneNumberIntl } from 'react-phone-number-input'
import { useState } from 'react'

function PhoneNumberInput() {
	const [value, setValue] = useState('')
	const [formattedValue, setFormattedValue] = useState('')

	const handleInputChange = val => {
		setValue(val)

		// Форматируем номер для отображения в международном формате
		const formatted = formatPhoneNumberIntl(val)
		setFormattedValue(formatted)
	}

	return (
		<div className='rounded-md py-1 px-1 outline-none'>
			<PhoneInput
				country='RU'
				value={value}
				onChange={handleInputChange}
				className='outline-none border-2 hover:border-red-500 duration-150 rounded-md py-1 px-1'
			/>
		</div>
	)
}

export default PhoneNumberInput
