import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import ru from 'date-fns/locale/ru'

function DateInput() {
	const [endDate, setEndDate] = useState(null)

	const handleDateChange = date => {
		setEndDate(date)
	}

	return (
		<div>
			<DatePicker
				selected={endDate}
				onChange={handleDateChange}
				locale={ru}
				dateFormat='dd/MM/yyyy' // Формат даты
				placeholderText='Выберите дату'
				className='rounded-md hover:border-sky-500 duration-300 px-4 py-1 w-[280px] border-2 border-gray-300 focus:outline-none text-center '
			/>
		</div>
	)
}

export default DateInput
