import DropDownList from '../components/componentsForm/dropDownLists/DropDownList'
import Checkbox from '../components/componentsForm/inputs/CheckboxInput'
import FileUpload from '../components/componentsForm/inputs/InputAddPhoto'
import EmptyInput from '../components/componentsForm/inputs/EmptyInput'
import ProductNameImput from '../components/componentsForm/inputs/ProductNameinput'
import TextAreaInput from '../components/componentsForm/inputs/TextAreaInput'

const stateCategories1 = ['Хорошее', 'Идеальное', 'Среднее', 'Требует ремонта']
const stateCategories2 = [
	'Ружья',
	'Пистолеты',
	'СХЛ и ММГ',
	'Пневматика',
	'Страйкбол'
]

function AddCardMain() {
	return (
		<form>
			<div className='mt-8 mb-6'>
				<div className='grid grid-cols-3 gap-4 place-items-center border-b-2 '>
					<div className='mr-8 font-bold mb-4 ml-[30px]'>Тип обьявления *</div>
					<div className='ml-8 flex'>
						<Checkbox label1='Куплю' />
						<Checkbox label1='Продам' />
					</div>
				</div>

				<div className='border-b-2 '>
					<div className='grid grid-cols-3 gap-4 place-items-center'>
						<div className='mr-8 font-bold ml-[30px] mb-4 mt-4'>
							Заголовок *
						</div>
						<ProductNameImput placeholder='glock 17' />
					</div>
				</div>

				<div className='grid grid-cols-3 place-items-center border-b-2 '>
					<h1 className='mr-8 font-bold mb-4 ml-[30px] mt-4'>Цена</h1>
					<div className='flex items-center'>
						<EmptyInput />
						<p className='ml-2'>руб.</p>
						<div className='ml-4'>
							<Checkbox label1='Торг уместен' />
						</div>
					</div>
				</div>

				<div className='grid grid-cols-3 place-items-center border-b-2 items-center'>
					<h1 className='mr-8 font-bold mb-4 mt-4 ml-[30px]'>Категория *</h1>
					<div className='cursor-pointer'>
						<DropDownList
							predefinedValues={stateCategories2}
							defaultText='-выберите категорию оружия'
						/>
					</div>
				</div>

				<div className='grid grid-cols-3 gap-4 place-items-center border-b-2 items-center'>
					<h2 className='mr-8 font-bold mb-4 mt-4 ml-[30px]'>Год выпуска</h2>
					<EmptyInput />
				</div>

				<div className='grid grid-cols-3 gap-4 place-items-center border-b-2 items-center'>
					<h2 className='mr-8 font-bold mb-4 mt-4 ml-[30px]'>Состояние</h2>
					<div className='cursor-pointer'>
						<DropDownList
							predefinedValues={stateCategories1}
							defaultText='выберите состояние оружия'
						/>
					</div>
				</div>

				<div className='grid grid-cols-3 place-items-center border-b-2 items-center'>
					<h2 className='mr-8 font-bold mb-4 mt-4 ml-[30px]'>Фотографии</h2>
					<FileUpload />
				</div>

				<div className='grid grid-cols-3 gap-4 place-items-center border-b-2 items-center h-[200px]'>
					<h2 className='mr-8 font-bold mb-4 mt-4 ml-[30px]'>
						Подробное описание *
					</h2>
					<TextAreaInput />
					<p></p>
				</div>

				<div className=' grid grid-cols-0 place-items-center mt-6  '>
					<Checkbox label1='Обмен возможен' />
					<Checkbox label1='Ускорить продажу' />
				</div>

				<div className='grid grid-cols-0 place-items-center mt-6 items-center'>
					<button
						type='submit'
						className='bg-blue-500 text-white py-2 px-4 ml-[30px] rounded-md hover:bg-blue-700 transition duration-300'
					>
						Добавить обьявление
					</button>
				</div>
			</div>
		</form>
	)
}
export default AddCardMain
