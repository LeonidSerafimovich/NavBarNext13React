import React, { useState } from 'react'

function PasswordChangeForm() {
	const [currentPassword, setCurrentPassword] = useState('')
	const [newPassword, setNewPassword] = useState('')
	const [confirmNewPassword, setConfirmNewPassword] = useState('')

	const handleSubmit = e => {
		e.preventDefault()
		if (newPassword === confirmNewPassword) {
			// Вы можете выполнить здесь логику для изменения пароля
			console.log('Пароль изменен')
		} else {
			// Вывести ошибку, если новый пароль и подтверждение не совпадают
			console.error('Новый пароль и подтверждение не совпадают')
		}
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div className='mb-2'>
					<input
						placeholder='Текущий пароль'
						type='password'
						id='currentPassword'
						value={currentPassword}
						onChange={e => setCurrentPassword(e.target.value)}
						className='outline-none border-2 hover:border-red-500 duration-150 rounded-md py-1 px-6'
					/>
				</div>
				<div className='mb-2'>
					<input
						placeholder='Новый пароль'
						type='password'
						id='newPassword'
						value={newPassword}
						onChange={e => setNewPassword(e.target.value)}
						className='outline-none border-2 hover:border-red-500 duration-150 rounded-md py-1 px-6'
					/>
				</div>
				<div className='mb-2'>
					<input
						placeholder='Повторите новый пароль'
						type='password'
						id='confirmNewPassword'
						value={confirmNewPassword}
						onChange={e => setConfirmNewPassword(e.target.value)}
						className='outline-none border-2 hover:border-red-500 duration-150 rounded-md py-1 px-6'
					/>
				</div>
				<button
					type='submit'
					className='border-2 bg-red-300 py-1 pl-2 pr-2 hover:bg-red-600 duration-200 rounded-md '
				>
					Изменить
				</button>
			</form>
		</div>
	)
}

export default PasswordChangeForm
