'use client'

import React, { useRef, useState } from 'react'
import { TbPhotoSensor2 } from 'react-icons/tb'
import { FiPlusCircle } from 'react-icons/fi'
import { useDispatch } from 'react-redux'

function PhotoUploadForm() {
	const uploadedImage = useRef(null)
	const imageUploader = useRef(null)
	const [imageSrc, setImageSrc] = useState('')
	const [isHovered, setIsHovered] = useState(false)
	const dispatch = useDispatch()

	const handleImageUpload = e => {
		const file = e.target.files[0]
		if (file) {
			const reader = new FileReader()
			reader.onload = e => {
				const dataURL = e.target.result as string
				uploadedImage.current = dataURL
				setImageSrc(dataURL)
				dispatch({ type: 'SET_USER_PHOTO', payload: dataURL })
			}
			reader.readAsDataURL(file)
		}
	}

	const triggerImageUpload = () => {
		imageUploader.current.click()
	}

	const removeImage = () => {
		uploadedImage.current.src = ''
		imageUploader.current.value = ''
		setImageSrc('') // Сбрасываем URL изображения
	}

	return (
		<div className=''>
			<input
				type='file'
				accept='image/*'
				onChange={handleImageUpload}
				ref={imageUploader}
				className='hidden'
			/>
			<div
				className='w-[170px] h-[170px] rounded-full border-b-4 border-red-600 flex items-center justify-center mb-4 cursor-pointer transition-transform transform hover:scale-105'
				onClick={triggerImageUpload}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				{imageSrc ? (
					<img
						ref={uploadedImage}
						alt=''
						className='w-full h-full object-cover rounded-full'
						src={imageSrc}
					/>
				) : (
					<div className='transform transition-transform hover:scale-125'>
						<TbPhotoSensor2
							size={64}
							color='black'
							className={`${isHovered ? 'hidden' : 'block'}`}
						/>
						<FiPlusCircle
							size={64}
							color='black'
							className={`${isHovered ? 'block' : 'hidden'}`}
						/>
					</div>
				)}
			</div>
			{imageSrc && (
				<button
					onClick={removeImage}
					className='bg-red-500 text-white w-[170px] px-1 rounded'
				>
					Удалить фото
				</button>
			)}
		</div>
	)
}

export default PhotoUploadForm
