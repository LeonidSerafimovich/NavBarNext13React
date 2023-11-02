'use client'

import React, { useState } from 'react'

function TextAreaInput() {
	const [text, setText] = useState('')
	const [numRows, setNumRows] = useState(4) // Задайте начальное количество строк

	const handleTextareaChange = e => {
		setText(e.target.value)
	}

	return (
		<div className='h-[200px]'>
			<textarea
				className='h-[184px] outline-none p-2 border-2 hover:border-sky-500 duration-300 my-2 rounded-md resize-none'
				value={text}
				onChange={handleTextareaChange}
				rows={numRows} // Используйте числовое значение
				cols={50}
			/>
			<p></p>
		</div>
	)
}

export default TextAreaInput
