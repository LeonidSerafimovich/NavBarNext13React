import Footer from './FooterComponents/FooterMain/Footer'
import CardMain from '../src/components/compCard/CardMain'

export const metadata = {
	title: 'Product',
	description: 'description for the home page'
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
					description='Отличное оружие. Стреляет как надо. Кучность отличная. Отстрелено 200 патронов.'
				/>
				<CardMain
					imageSrc=''
					name='Ak-47'
					price='16000 руб.'
					location='Челябинск. гор. Озерск'
					description='Отличное оружие. Стреляет как надо. Кучность отличная. Отстрелено 200 патронов.'
				/>
				<CardMain
					imageSrc=''
					name='Ak-47'
					price='16000 руб.'
					location='Челябинск. гор. Озерск'
					description='Отличное оружие. Стреляет как надо. Кучность отличная. Отстрелено 200 патронов.'
				/>
			</div>
			<Footer />
		</div>
	)
}
