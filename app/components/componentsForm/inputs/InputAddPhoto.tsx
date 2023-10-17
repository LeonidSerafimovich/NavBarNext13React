'use client'

import React, { useState } from 'react'
import { FiUpload } from 'react-icons/fi'
import { AiOutlineDelete } from 'react-icons/ai'

function FileUpload() {
	const [selectedFiles, setSelectedFiles] = useState([])

	const handleFileChange = e => {
		const files = Array.from(e.target.files)
		if (files.length > 0) {
			setSelectedFiles([...selectedFiles, ...files])
			e.target.value = null // Очищаем поле ввода для повторной загрузки
		}
	}

	const handleRemove = index => {
		const newFiles = [...selectedFiles]
		console.log(index)
		newFiles.splice(index, 1)
		setSelectedFiles(newFiles)
	}

	return (
		<div className='flex flex-wrap justify-around items-center '>
			<label htmlFor='file-upload' className='cursor-pointer '>
				<FiUpload className='text-4xl  rounded-md duration-300 hover:text-5xl mr-6' />
			</label>
			<input
				type='file'
				id='file-upload'
				onChange={handleFileChange}
				accept='image/*'
				multiple
				style={{ display: 'none' }}
			/>
			{selectedFiles.map((file, index) => (
				<div
					key={index}
					className='flex-start justify-around items-center relative p-2 mr-2 '
				>
					<img
						src={URL.createObjectURL(file)}
						alt={`Selected icon ${index}`}
						className='w-[118px] h-[90px] rounded-md object-cover contrast-50 hover:contrast-100 duration-200 '
					/>
					<div
						onClick={() => handleRemove(index)}
						className='cursor-pointer rounded-md absolute top-0 right-2 bg-white'
					>
						<AiOutlineDelete className=' text-xl hover:bg-stone-300 rounded-md duration-300' />
					</div>
				</div>
			))}
		</div>
	)
}

export default FileUpload

//Selected icon
