'use client'

import Checkbox from '../componentsForm/inputs/CheckboxInput'
import TextAreaInput from '../componentsForm/inputs/TextAreaInput'
import PhoneNumberInput from '../componentsForm/inputs/PhoneNumberInput'
import EmailInput from '../componentsForm/inputs/EmailInput'
import PasswordChangeForm from '../componentsForm/inputs/PasswordChangeForm'

export default function CabinetSettings() {
	return (
		<div className='min-h-[300px] px-4 '>
			<h1 className='mb-6 ml-6 text-2xl '>Привет, Aboba</h1>
			<div className='grid grid-cols-3 gap-4 place-items-center mb-6 border-b-2 '>
				<span className='font-bold '>Телефон:</span>
				<div className='mb-2'>
					<PhoneNumberInput />
				</div>
			</div>
			<div className='grid grid-cols-3 gap-4 place-items-center mb-6 border-b-2'>
				<span className='font-bold '>Email:</span>
				<div className='mb-2'>
					<EmailInput />
				</div>
			</div>
			<div className=' grid grid-cols-3 gap-4 place-items-center mb-6 border-b-2'>
				<span className='font-bold'>Пароль:</span>
				<div className='flex flex-col mb-2'>
					<PasswordChangeForm />
				</div>
			</div>
			<div className='grid grid-cols-3 gap-4 place-items-center mb-6 border-b-2'>
				<span className='font-bold grid place-items-center'>Уведомления:</span>
				<div className='flex flex-col mb-2'>
					<Checkbox label1='Оповещать при ответах на комментарий' />
					<Checkbox label1='Оповещать при личных сообщениях' />
					<Checkbox label1='Присылать новости сайта' />
				</div>
			</div>
			<div className='grid grid-cols-3 gap-4 place-items-center mb-6 '>
				<span className='font-bold'>О себе:</span>
				<TextAreaInput />
			</div>
			<div className='grid grid-cols-3 gap-4 place-items-center mb-6'>
				<a
					href='/license'
					className='p-2 pl-2 pr-2 rounded-lg bg-red-400 hover:bg-red-600 duration-300 '
				>
					Мои лицензии
				</a>
			</div>
			<div className='grid grid-cols-3  place-items-center mb-6'>
				<button className=' bg-red-400 py-2 pl-2 pr-2 hover:bg-red-600 duration-300 rounded-md  '>
					Удалить профиль
				</button>
			</div>
		</div>
	)
}
