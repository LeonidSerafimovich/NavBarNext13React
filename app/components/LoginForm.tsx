'use client'

import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import Input from './componentsForm/inputs/LableTopInput'
import { EmailPassword } from '../types/auth/AuthDataType'

function LoginForm() {
	const {
		handleSubmit,
		register: formRegister,
		formState: { errors }
	} = useForm<EmailPassword>()

	const onSubmit: SubmitHandler<EmailPassword> = data => {
		alert(`твой емаил ${data.email}`)
		console.log(errors)
	}

	return (
		<div className='wrapper mt-[0px] min-h-screen flex items-center justify-center'>
			<div className='bg-white border-2 rounded-lg p-4 text-center'>
				<h1 className='text-3xl font-medium mb-4'>Личный кабинет</h1>
				<form onSubmit={handleSubmit(onSubmit)} className='grid gap-4'>
					<Input
						{...formRegister('email', {
							required: 'введи email'
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
							required: 'введи пароль'
						})}
						id='password'
						type='password'
						placeholder='Password'
						label='Введите пароль '
					/>
					{errors.password && (
						<div className='text-red-600 ml-0 '>{errors.password.message}</div>
					)}

					<button
						type='submit'
						className='bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300'
					>
						войти
					</button>
				</form>
				<a
					href='#'
					className='text-blue-500 hover:text-[#3a51d6] hover:translate-x-2 transition duration-900 text-left text-sm block mt-4'
				>
					Забыли пароль ?
				</a>
				<a
					href='/signup'
					className='text-blue-500 text-sm hover:translate-x-2 hover:text-[#3a51d6] transition duration-900 text-left block mt-2'
				>
					Зарегестрироваться
				</a>
			</div>
		</div>
	)
}

export default LoginForm
