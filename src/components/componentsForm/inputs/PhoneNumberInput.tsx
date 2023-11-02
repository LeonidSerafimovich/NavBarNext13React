import 'react-phone-number-input/style.css'
import PhoneInput, { formatPhoneNumberIntl } from 'react-phone-number-input'
import { useState } from 'react'

function PhoneNumberInput() {
	const [value, setValue] = useState('')
	const [formattedValue, setFormattedValue] = useState('')

	const handleInputChange = val => {
		setValue(val)

		const formatted = formatPhoneNumberIntl(val)
		setFormattedValue(formatted)
	}

	return (
		<PhoneInput
			country='RU'
			value={value}
			onChange={handleInputChange}
			className='outline-none border-2 hover:border-red-500 duration-150 rounded-md py-1 px-1'
		/>
	)
}

export default PhoneNumberInput
