import React from 'react'

function ProductNameInput({ placeholder }) {
	return (
		<>
			<input
				type='text'
				className='rounded-md hover:border-sky-500 duration-300 px-4 py-1 w-[280px] border-2 border-gray-300 focus:outline-none'
				placeholder={placeholder} // Используем переданный плейсхолдер из пропсов
			/>
		</>
	)
}

export default ProductNameInput
