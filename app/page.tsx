import Footer from './FooterComponents/FooterMain/Footer'
import CardMain from '../src/components/compCard/CardMain'

const DE1 = './images/DE1.jpg'

export const metadata = {
	title: 'Product',
	description: 'description for the homepage'
}

export default function Home() {
	return (
		<div>
			<div className='mt-[200px]'>
				<CardMain
					imageSrc=''
					name='Ak-47'
					price='16000 руб.'
					location='Челябинск. гор. Озерск'
					description='Отличное оружие. Стреляет как надо. Кучность отличная. Отстрелено 200 потронов.'
				/>
				<CardMain
					imageSrc=''
					name='Ak-47'
					price='16000 руб.'
					location='Челябинск. гор. Озерск'
					description='Отличное оружие. Стреляет как надо. Кучность отличная. Отстрелено 200 потронов.'
				/>
				<CardMain
					imageSrc=''
					name='Ak-47'
					price='16000 руб.'
					location='Челябинск. гор. Озерск'
					description='Отличное оружие. Стреляет как надо. Кучность отличная. Отстрелено 200 потронов.'
				/>
				<CardMain
					imageSrc=''
					name='Ak-47'
					price='16000 руб.'
					location='Челябинск. гор. Озерск'
					description='Отличное оружие. Стреляет как надо. Кучность отличная. Отстрелено 200 потронов.'
				/>
			</div>
			<Footer />
		</div>
	)
}
