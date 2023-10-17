'use client'

import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import Input from './componentsForm/inputs/LableTopInput'
import { RegistrarionData } from '../types/auth/AuthDataType'

function SignUpForm() {
	const {
		handleSubmit,
		register: formRegister,
		formState: { errors }
	} = useForm<RegistrarionData>()

	const onSubmit: SubmitHandler<RegistrarionData> = data => {
		alert(`твой емаил ${data.email}`)
		console.log(errors)
	}

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
						className='bg-blue-500 hover:bg-gradient-to-r from-violet-500 to-fuchsia-500 py-2 px-4 rounded-md text-white transition duration-300 animate-gradient'
					>
						Зарегестрироваться
					</button>
				</form>
			</div>
		</div>
	)
}

export default SignUpForm
