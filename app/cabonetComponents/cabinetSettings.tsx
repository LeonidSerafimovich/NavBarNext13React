import Input from 'react-widgets/cjs/Input'
import Checkbox from '../components/componentsForm/inputs/CheckboxInput'
import TextAreaInput from '../components/componentsForm/inputs/TextAreaInput'

export default function CabinetSettings() {
	return (
		<div className='min-h-[300px] flex-1 px-4'>
			<h1 className='mb-6 ml-6 '>Aboba</h1>
			<div className=''>
				<span className='font-bold '>Телефон:</span>
				<Input
					type='number'
					placeholder='+7 (999) 666-02-28'
					className='border-2 rounded-md'
				/>
			</div>
			<div className=''>
				<span className='font-bold '>Email:</span>
				<Input
					id='email'
					type='text'
					placeholder='email'
					label='Введите email'
					className='border-2 rounded-md '
				/>
			</div>
			<div className='flex'>
				<span className='font-bold'>Пароль:</span>
				<div className='flex flex-col'>
					<Input
						type='password'
						placeholder='текущий пароль'
						label='Введите пароль'
						className='border-2 rounded-md'
					/>
					<Input
						type='password'
						placeholder='новый пароль'
						label='Введите пароль'
						className='border-2 rounded-md'
					/>

					<Input
						type='password'
						placeholder='повторите пароль'
						label='Подтвердите пароль'
						className='border-2 rounded-md'
					/>
					<button className='border-2 bg-red-600 rounded-md py-1 pl-1'>
						Изменить пароль
					</button>
				</div>
			</div>
			<div className='flex'>
				<span className='font-bold'>Уведомления:</span>
				<div className='flex flex-col'>
					<Checkbox label1='Оповещать об изменении цен у избранных объявлений' />
					<Checkbox label1='Оповещать при ответах на комментарий' />
					<Checkbox label1='Оповещать при личных сообщениях' />
					<Checkbox label1='Присылать новости сайта' />
				</div>
			</div>
			<div>
				<span className='font-bold'>О себе</span>
				<TextAreaInput />
			</div>
			<button className='border-2 bg-red-600 rounded-md py-1 pl-1 '>
				Удалить профиль
			</button>
		</div>
	)
}
