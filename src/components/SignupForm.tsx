'use client'

import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import Input from './componentsForm/inputs/LableTopInput'
import { RegistrarionData } from '../types/auth/AuthDataType'
import { useDispatch } from 'react-redux'
import { signupUser } from '../redux/auth/authSignup/signupAction'
// import { useRouter } from 'next/router'

// interface UserData {
// 	userName: string
// 	email: string

// }

function SignUpForm() {
	const {
		handleSubmit,
		register: formRegister,
		formState: { errors }
	} = useForm<RegistrarionData>()

	const dispatch = useDispatch()

	const onSubmit: SubmitHandler<RegistrarionData> = data => {
		dispatch(signupUser(data.userName, data.email))
	}

	// const handleRegistrationSubmit = async (userData: UserData) => {
	// 	const dispatch = useDispatch()
	// 	const router = useRouter()

	// 	try {
	// 		// Отправляем данные на сервер для регистрации
	// 		const response = await fetch('/api/register', {
	// 			method: 'POST',
	// 			headers: {
	// 				'Content-Type': 'application/json'
	// 			},
	// 			body: JSON.stringify(userData)
	// 		})

	// 		// После успешной регистрации
	// 		if (response.ok) {
	// 			// Вызываем action для обновления состояния в Redux
	// 			dispatch(signupUser(userData.userName, userData.email))

	// 			// Перенаправляем пользователя на нужную страницу
	// 			router.push('/') // Замените '/dashboard' на путь к нужной странице
	// 		}
	// 	} catch (error) {
	// 		// Обработка ошибок при регистрации
	// 		console.error('Ошибка при регистрации:', error)
	// 	}
	// }

	return (
		<div className='wrapper mt-[0px] min-h-screen flex items-center justify-center'>
			<div className='bg-white border-2 rounded-lg p-4 text-center'>
				<h1 className='text-3xl font-medium mb-4'>Регистрация на сайте</h1>
				<form onSubmit={handleSubmit(onSubmit)} className='grid gap-4'>
					<Input
						{...formRegister('userName', {
							required: 'введите имя пользователя'
						})}
						id='userName'
						type='text'
						placeholder='user'
						label='Ваше имя'
					/>
					{errors.userName && (
						<div className='text-red-600 ml- '>{errors.userName.message}</div>
					)}
					<Input
						{...formRegister('email', {
							required: 'введите Email'
						})}
						id='email'
						type='text'
						placeholder='email'
						label='Введите email'
					/>
					{errors.email && (
						<div className='text-red-600 ml-0 '>{errors.email.message}</div>
					)}
					<Input
						{...formRegister('password', {
							required: 'введите пароль'
						})}
						id='password'
						type='password'
						placeholder='Password'
						label='Введите пароль'
					/>
					{errors.password && (
						<div className='text-red-600 ml-0 '>{errors.password.message}</div>
					)}
					<Input
						{...formRegister('repeatPassword', {
							required: 'подтвердите пароль'
						})}
						id='repeatPassword'
						type='password'
						placeholder='Password'
						label='Подтвердите пароль'
					/>
					{errors.repeatPassword && (
						<div className='text-red-600 ml-0 '>
							{errors.repeatPassword.message}
						</div>
					)}

					<button
						type='submit'
						className='bg-blue-500 hover:bg-violet-500 duration-200 py-2 px-4 rounded-md text-white  '
					>
						Зарегистрироваться
					</button>
				</form>
			</div>
		</div>
	)
}

export default SignUpForm
